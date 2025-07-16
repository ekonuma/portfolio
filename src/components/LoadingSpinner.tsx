export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner" />
      <p>Processando sua mensagem...</p>

      <style jsx>{`
        .spinner-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1rem;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #ccc;
          border-top: 4px solid #0070f3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        p {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: #555;
        }
      `}</style>
    </div>
  );
}