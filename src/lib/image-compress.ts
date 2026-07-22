/**
 * Compression d'image côté client (zéro dépendance) avant upload vers
 * /api/devis — limite Vercel serverless : 4,5 Mo de body.
 */

/** Cap client après compression (marge sous la limite Vercel de 4,5 Mo). */
export const MAX_UPLOAD_BYTES = 3_500_000;

/** En-dessous de cette taille, on ne touche pas au fichier. */
const COMPRESS_THRESHOLD_BYTES = 1_500_000;

type CompressOptions = {
  /** Largeur max en px, ratio conservé. */
  maxWidth?: number;
  /** Qualité JPEG (0 à 1). */
  quality?: number;
};

/**
 * Redimensionne et ré-encode une photo en JPEG. Si le fichier est déjà léger,
 * n'est pas une image ou n'est pas décodable par le navigateur (HEIC…),
 * retourne le fichier original tel quel.
 */
export async function compressImage(file: File, opts: CompressOptions = {}): Promise<File> {
  const { maxWidth = 1600, quality = 0.8 } = opts;

  if (file.size < COMPRESS_THRESHOLD_BYTES || !file.type.startsWith("image/")) {
    return file;
  }

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, maxWidth / bitmap.width);
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) return file;

    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", quality),
    );
    if (!blob || blob.size >= file.size) return file;

    const baseName = file.name.replace(/\.[^.]+$/, "") || "photo";
    return new File([blob], `${baseName}.jpg`, { type: "image/jpeg" });
  } catch {
    // Format non décodable (HEIC…) : on laisse le serveur recevoir l'original.
    return file;
  }
}
