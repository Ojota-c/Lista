/* eslint-disable react-hooks/error-boundaries */
export default async function Home() {
  try {
    const response = await fetch("http://localhost:3001/", {
      cache: "no-store",
    });
    const data = await response.text();
    return (
      <main className="padding: '2rem', fontFamily: 'sans-serif'">
        <h1>Conexão Next.js and Express is SUCSSES</h1>
        <div
          className="marginTop: '1rem', 
          padding: '1rem', 
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          color: '#333'
          "
        >
          <p>Resposta do Servidor:</p>
          <p>
            <strong>{data}</strong>
          </p>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="padding: '2rem'">
        <h1>Erro ao conectar!</h1>
        <p>Certifique seu servidar na porta 3001 esta rodando</p>
      </main>
    );
    return error;
  }
}
