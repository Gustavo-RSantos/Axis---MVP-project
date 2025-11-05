"use client"

import { motion } from "motion/react"
import { Mail, MapPin, Phone} from 'lucide-react';


export function Footer(){

    return(
      <motion.footer 
        className="bg-linear-to-r from-teal-600 to-[#2E5266] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-white">Contato</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:contato@saudemasculina.com.br" 
                  className="flex items-center gap-3 text-teal-100 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    contato@saudemasculina.com.br
                  </span>
                </a>
                <a 
                  href="tel:1799999-9999" 
                  className="flex items-center gap-3 text-teal-100 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    (17) 99999-9999
                  </span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white">Endereço</h3>
              <div className="flex items-start gap-3 text-teal-100">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <span>Rua Exemplo, 123 - Aracaju<br />Sergipe, Brasil</span>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-teal-500/30 text-center text-teal-100">
            <p>© 2025 Saúde - Todos os direitos reservados</p>
          </div>
        </div>
      </motion.footer>
    );
}