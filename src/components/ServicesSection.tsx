import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Sob Medida",
    description: "Sistemas personalizados para atender às necessidades únicas do seu negócio.",
  },
  {
    icon: Globe,
    title: "Aplicações Web",
    description: "Plataformas web modernas, escaláveis e com experiência de usuário impecável.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos nativos e multiplataforma para iOS e Android.",
  },
  {
    icon: Database,
    title: "Integração de Sistemas",
    description: "Conectamos suas ferramentas e dados em um ecossistema unificado.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Soluções completas para todas as etapas da sua transformação digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
