export const metadata = {
  title: 'API Ubicaciones España',
  description: 'API pública de ubicaciones de España',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
