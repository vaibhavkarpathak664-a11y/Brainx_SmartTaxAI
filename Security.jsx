export default function Security() {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-10">
      {["Encryption", "Secure Auth", "Transparency"].map((item) => (
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
          <h3 className="text-xl">{item}</h3>
          <p className="text-slate-400 mt-2">
            Your data is fully protected with government-grade security.
          </p>
        </div>
      ))}
    </div>
  );
}