const GOOGLE_API_KEY = "AIzaSyAqrcszVAu4ejFOjCzJIRfcNyMQKVMs0XA";

export function getMapPreview(latitude: number, longitude: number) {
    const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
    return imagePreviewURL;
}