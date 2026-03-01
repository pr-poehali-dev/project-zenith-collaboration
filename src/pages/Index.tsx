import { Hero } from "@/components/Hero";

const achievements = [
  { title: "Топ-8", desc: "ESL Pro League Season 19", year: "2024" },
  { title: "Чемпионы", desc: "CIS Regional Championship", year: "2024" },
  { title: "Топ-4", desc: "BLAST Premier Spring Groups", year: "2025" },
];

const team = [
  { nick: "amullet", role: "Rifler · CEO", country: "🇺🇦", lvl: 8 },
  { nick: "xinxed", role: "Rifler", country: "🇷🇺", lvl: 9 },
  { nick: "kironixx", role: "Rifler", country: "🇷🇺", lvl: 8 },
  { nick: "s1per", role: "Rifler", country: "🇷🇺", lvl: 8 },
  { nick: "for4ward", role: "AWPer", country: "🇷🇺", lvl: 8 },
];

const bench = [
  { nick: "hulsey", role: "Rifler", country: "🇷🇺", lvl: 7 },
  { nick: "winda", role: "Rifler", country: "🇷🇺", lvl: 8 },
];

export default function Index() {
  return (
    <div className="bg-background text-foreground">
      <Hero />

      {/* Achievements */}
      <section id="achievements" className="py-24 border-t border-border/40">
        <div className="container max-w-5xl mx-auto">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">
            Достижения
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-16">
            Наши <i className="font-light">победы</i>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="border border-border/40 p-8 hover:border-primary/60 transition-colors duration-300 group"
              >
                <span className="font-mono text-xs text-foreground/40 uppercase">{a.year}</span>
                <h3 className="text-3xl font-sentient mt-2 mb-1 group-hover:text-primary transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="font-mono text-sm text-foreground/60">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 border-t border-border/40">
        <div className="container max-w-5xl mx-auto">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">
            Состав · CS2
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-16">
            Наша <i className="font-light">команда</i>
          </h2>

          <div className="divide-y divide-border/40 mb-10">
            {team.map((player, i) => (
              <div
                key={player.nick}
                className="flex items-center justify-between py-5 group hover:pl-2 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs text-foreground/30 w-5">{i + 1}</span>
                  <span className="text-xl">{player.country}</span>
                  <span className="text-2xl md:text-3xl font-sentient group-hover:text-primary transition-colors duration-300">
                    {player.nick}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-foreground/40 uppercase hidden sm:block">
                    {player.role}
                  </span>
                  <span className="font-mono text-xs border border-primary/40 text-primary px-2 py-0.5">
                    LVL {player.lvl}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-foreground/30 uppercase tracking-widest mb-4">Запасные</p>
          <div className="divide-y divide-border/20">
            {bench.map((player) => (
              <div
                key={player.nick}
                className="flex items-center justify-between py-4 opacity-50 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xl">{player.country}</span>
                  <span className="text-xl font-sentient">{player.nick}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-foreground/40 uppercase hidden sm:block">
                    {player.role}
                  </span>
                  <span className="font-mono text-xs border border-border/40 text-foreground/40 px-2 py-0.5">
                    LVL {player.lvl}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 border-t border-border/40">
        <div className="container max-w-5xl mx-auto">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">
            Партнёры
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-16">
            С кем мы <i className="font-light">работаем</i>
          </h2>
          <div className="border border-primary/40 p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-primary/5">
            <div>
              <p className="font-mono text-xs text-foreground/40 uppercase mb-2">Генеральный партнёр</p>
              <h3 className="text-5xl font-bold tracking-tight mt-1 mb-3">
                <span className="text-foreground">1</span><span className="text-primary">win</span>
              </h3>
              <p className="font-mono text-sm text-foreground/60 max-w-sm">
                Официальный партнёр организации 1337. Вместе мы строим будущее киберспорта.
              </p>
            </div>
            <div className="w-20 h-20 border border-primary/40 flex items-center justify-center bg-background/60">
              <span className="font-bold text-2xl"><span className="text-foreground">1</span><span className="text-primary">w</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-border/40">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-3">
            Контакты
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-6">
            Хочешь в <i className="font-light">1337?</i>
          </h2>
          <p className="font-mono text-sm text-foreground/60 max-w-md mx-auto mb-12">
            Мы всегда ищем таланты. Если ты готов побеждать — напиши нам.
          </p>
          <a
            href="mailto:contact@1337.gg"
            className="inline-block font-mono uppercase text-primary border border-primary/40 px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            [Написать нам]
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-sm text-foreground/40">© 2025 1337 — Киберспорт</span>
          <span className="font-mono text-xs text-foreground/30 uppercase">
            Партнёр: 1win
          </span>
        </div>
      </footer>
    </div>
  );
}