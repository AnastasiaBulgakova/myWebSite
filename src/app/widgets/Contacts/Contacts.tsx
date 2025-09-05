import { forwardRef, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection = forwardRef<HTMLDivElement, { isVisible: boolean }>(
    ({ isVisible }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();

  const { t } = useTranslation();

  const telegramLabel = t('contacts.telegramComment');
  const emailLabel = t('contacts.emailComment');
  const githubLabel = t('contacts.githubComment');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = Math.floor(Math.random() * 10).toString();


        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

  return (
    <section 
    id='contacts'
    ref={ref} className={`relative h-screen flex items-center justify-center transition-all duration-1000 ease-in-out transform bg-black text-lime-300 font-mono px-6 py-20 overflow-hidden ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-t from-transparent to-black pointer-events-none" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-zinc-900/50 border border-lime-800 rounded-lg p-6 text-center shadow-md backdrop-blur">
        <h2 className="text-xl mb-3 text-lime-400 glow">:: CONTACTS.LOG</h2>

        <div className="space-y-4 text-sm">
          <div>
            <a
              href="https://t.me/nbwdn"
              target="_blank"
              className="inline-block border border-lime-400 text-lime-300 px-4 py-2 rounded hover:bg-lime-400 hover:text-black transition-colors duration-200 mb-2"
            >
              Telegram
            </a>
            <p className="text-xs text-lime-600">— {telegramLabel}</p>
          </div>

          <div>
            <a
              href="mailto:nbulghakova@mail.ru"
              className="inline-block border border-lime-400 text-lime-300 px-4 py-2 rounded hover:bg-lime-400 hover:text-black transition-colors duration-200 mb-2"
            >
              Email
            </a>
            <p className="text-xs text-lime-600">— {emailLabel}</p>
          </div>

          <div>
            <a
              href="https://github.com/AnastasiaBulgakova"
              target="_blank"
              className="inline-block border border-lime-400 text-lime-300 px-4 py-2 rounded hover:bg-lime-400 hover:text-black transition-colors duration-200 mb-2"
            >
              GitHub
            </a>
            <p className="text-xs text-lime-600">— {githubLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
