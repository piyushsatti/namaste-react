const Shimmer = () => {
  const cards = Array.from({ length: 10 });

  return (
    <>
      <style>{`
        .shimmer-wrapper{
          display:flex;
          flex-wrap:wrap;
          gap:16px;
          padding:16px;
          justify-content:center;
        }
        .shimmer-card{
          flex:0 1 calc(25% - 16px);
          min-width:180px;
          height:150px;
          border-radius:8px;
          background:#eee;
          position:relative;
          overflow:hidden;
          box-shadow:0 1px 3px rgba(0,0,0,0.08);
        }
        .shimmer-card::before{
          content:"";
          position:absolute;
          top:0;
          left:-100%;
          height:100%;
          width:100%;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          animation:shimmer 1.2s infinite;
        }
        @keyframes shimmer{
          100% { left:100%; }
        }
        @media (max-width:800px){
          .shimmer-card{ flex:0 1 calc(50% - 16px); }
        }
        @media (max-width:420px){
          .shimmer-card{ flex:0 1 100%; }
        }
      `}</style>

      <div className="shimmer-wrapper" aria-hidden="true">
        {cards.map((_, i) => (
          <div className="shimmer-card" key={i} />
        ))}
      </div>
    </>
  );
};

export default Shimmer;
