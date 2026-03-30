import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AgroConnect",
    category: "Sistema Web",
    description: "Plataforma de gestão agrícola integrada para produtores rurais do Mato Grosso do Sul, com controle de safras, estoque e financeiro.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "PetVida",
    category: "App Mobile",
    description: "Aplicativo para clínicas veterinárias com agendamento online, prontuário digital e notificações de vacinação.",
    tags: ["React Native", "Firebase"],
  },
  {
    title: "EduPlatform",
    category: "Plataforma EAD",
    description: "Sistema completo de ensino a distância com videoaulas, exercícios interativos e dashboard de desempenho para instituições de ensino.",
    tags: ["Next.js", "AWS", "Stripe"],
  },
  {
    title: "LogiTrack",
    category: "Sistema de Logística",
    description: "Software de rastreamento e gestão de frotas em tempo real para transportadoras, com roteirização inteligente.",
    tags: ["Vue.js", "Python", "IoT"],
  },
  {
    title: "SaborDigital",
    category: "E-commerce",
    description: "Loja virtual completa para rede de restaurantes com cardápio digital, pedidos online e integração com iFood.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "CondoGestão",
    category: "Sistema Web",
    description: "Plataforma de administração condominial com controle financeiro, reservas de áreas comuns e comunicação entre moradores.",
    tags: ["Angular", "Java", "MySQL"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos <span className="text-accent">Realizados</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Conheça alguns dos projetos que já desenvolvemos para nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              {/* Colored header bar */}
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
