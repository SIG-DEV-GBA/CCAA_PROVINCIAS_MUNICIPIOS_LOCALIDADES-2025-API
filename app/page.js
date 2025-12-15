export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🇪🇸 API de Ubicaciones de España</h1>
      <p>API pública con datos de comunidades autónomas, provincias, municipios y localidades.</p>

      <h2>📊 Estadísticas</h2>
      <ul>
        <li>19 Comunidades Autónomas</li>
        <li>52 Provincias</li>
        <li>8,660 Municipios</li>
        <li>48,361 Localidades</li>
      </ul>

      <h2>🔗 Endpoints</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>Endpoint</th>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}><a href="/api">/api</a></td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Documentación de la API</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}><a href="/api/comunidades">/api/comunidades</a></td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Lista de comunidades autónomas</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}><a href="/api/provincias">/api/provincias</a></td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Lista de provincias</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}><a href="/api/municipios">/api/municipios</a></td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Lista de municipios (paginado)</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}><a href="/api/localidades">/api/localidades</a></td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Lista de localidades (paginado)</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}><a href="/api/buscar?q=madrid">/api/buscar?q=madrid</a></td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>Búsqueda en todas las entidades</td>
          </tr>
        </tbody>
      </table>

      <h2>📖 Ejemplos</h2>
      <ul>
        <li><a href="/api/comunidades/1">/api/comunidades/1</a> - País Vasco con sus provincias</li>
        <li><a href="/api/provincias?comunidad_id=4">/api/provincias?comunidad_id=4</a> - Provincias de Andalucía</li>
        <li><a href="/api/municipios?provincia_id=28">/api/municipios?provincia_id=28</a> - Municipios de Madrid</li>
        <li><a href="/api/buscar?q=bilbao&tipo=municipio">/api/buscar?q=bilbao&tipo=municipio</a> - Buscar municipios con "bilbao"</li>
      </ul>

      <h2>📜 Fuente de datos</h2>
      <p>INE - Relación de municipios a 1 de enero de 2025</p>

      <footer style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #ddd', color: '#666' }}>
        <p>Datos actualizados: Diciembre 2025 | Licencia: MIT</p>
      </footer>
    </main>
  );
}
