import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-card">
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <p className="font-display text-2xl font-bold text-foreground mb-3">
            Conect<span className="text-accent">a</span>Soft
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Transformamos ideias em soluções digitais poderosas desde 2025.
          </p>
        </div>

        <div>
          <p className="font-display font-semibold text-foreground mb-4">Contato</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              (67) 3668-1567
            </div>
            <div className="flex items-center gap-3 text-muted-foreground text-sm">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              conecta.soft@gmail.com.br
            </div>
          </div>
        </div>

        <div>
          <p className="font-display font-semibold text-foreground mb-4">Endereço</p>
          <div className="flex items-start gap-3 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>
              R. Ângelo Melão, nº 790<br />
              Jd. das Paineiras<br />
              Três Lagoas/MS
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 ConectaSoft. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
