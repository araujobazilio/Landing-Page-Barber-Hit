import { Star, Users, Trophy, Clock, CheckCircle, Play, Award, Target, Scissors, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Scissors className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-white">Felippe Caetano</h1>
          </div>
          <a 
            href="https://go.hotmart.com/D101160980B?dp=1" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              return gtag_report_conversion('https://go.hotmart.com/D101160980B?dp=1');
            }}
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            COMEÇAR AGORA
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-6">
              <Scissors className="h-16 w-16 text-black" />
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-yellow-500 font-semibold">4.7 (107 avaliações)</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Bem Avaliado</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-500 bg-clip-text text-transparent leading-tight">
            BARBER HIT
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            O treinamento mais completo para você se tornar um <span className="text-yellow-500 font-bold">barbeiro profissional de sucesso</span> ou transformar seu negócio
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold">+5.000 alunos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold">Maior YouTuber da área</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold">8 anos de experiência</span>
            </div>
          </div>
          
          <div className="mb-10 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 p-6 rounded-xl border border-yellow-500/30 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold mb-2 text-white">Investimento Especial</h3>
            <div className="flex flex-col items-center">
              <p className="text-gray-400 line-through text-lg">De R$ 1.497,00 por apenas</p>
              <p className="text-4xl font-black text-yellow-500 mb-2">R$ 997,00</p>
              <p className="text-xl text-white mb-4">em 12x de <span className="font-bold">R$ 103,11</span> no cartão</p>
              <div className="flex items-center justify-center space-x-2 text-red-500 font-semibold mb-4">
                <Clock className="h-5 w-5" />
                <span>Oferta por tempo limitado!</span>
              </div>
              <div className="bg-red-500/20 text-white p-3 rounded-lg text-sm mb-2 w-full text-center">
                <span className="font-bold">ATENÇÃO:</span> Restam apenas 7 vagas com este valor!
              </div>
            </div>
          </div>
          
          <a 
            href="https://go.hotmart.com/D101160980B?dp=1" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              return gtag_report_conversion('https://go.hotmart.com/D101160980B?dp=1');
            }}
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
          >
            <Play className="inline h-6 w-6 mr-2" />
            QUERO COMEÇAR AGORA
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="w-24 h-24 overflow-hidden rounded-full mb-6 border-2 border-yellow-500">
                  <img src="/avatar.webp" alt="Felippe Caetano" className="w-full h-full object-cover" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Conheça o <span className="text-yellow-500">Felippe Caetano</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Felippe Caetano é um renomado professor de barbearia que se especializou em didática para o aluno, sempre tentando entender como funciona o aprendizado para que suas aulas tenham um <span className="text-white font-semibold">efeito transformador</span>.
                </p>
                <p>
                  Com mais de <span className="text-yellow-500 font-bold">5.000 alunos no mundo online</span>, transformou barbeiros do zero em grandes empreendedores do ramo, assim como barbeiros iniciantes e experientes.
                </p>
                <p>
                  Seu lema como professor é ensinar o aluno a ponto que ele seja <span className="text-white font-semibold">melhor que o próprio professor</span>, compartilhando todas as técnicas que realmente fazem a diferença.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-500/20">
              <div className="text-center">
                <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Maior Criador de Conteúdo</h3>
                <p className="text-gray-300 mb-6">
                  Felippe Caetano é o maior criador de conteúdo do ramo e maior YouTuber da área, com vídeos diários e comprometimento 100% voltado para o mundo online.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">8 Anos</span>
                  <span className="text-gray-400">na Hotmart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Veja o que o <span className="text-yellow-500">Felippe tem a dizer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra por que montar sua própria barbearia pode transformar sua vida profissional
            </p>
          </div>
          
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-yellow-500/20">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/oeH01DsR848" 
              title="Montar barbearia ou trabalhar para os outros?" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher o <span className="text-yellow-500">Barber HIT?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra os 5 principais diferenciais que fazem do Barber HIT o treinamento mais completo do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Target className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Conteúdo de Qualidade</h3>
              <p className="text-gray-300 leading-relaxed">
                Conteúdos de alta qualidade desenvolvidos por um professor especializado em didática, garantindo aprendizado efetivo e transformador.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Clock className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Aulas Online</h3>
              <p className="text-gray-300 leading-relaxed">
                Produto totalmente online que permite acesso ao conteúdo a qualquer hora e lugar, de acordo com sua disponibilidade.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Transformação Profissional</h3>
              <p className="text-gray-300 leading-relaxed">
                Mais de 5.000 alunos já transformados de iniciantes em grandes empreendedores do ramo da barbearia.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Trophy className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Maior Criador de Conteúdo</h3>
              <p className="text-gray-300 leading-relaxed">
                Acesso a informações atualizadas e relevantes do maior YouTuber da área de barbearia no Brasil.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <CheckCircle className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Comprometimento 100%</h3>
              <p className="text-gray-300 leading-relaxed">
                Professor com comprometimento total voltado para o mundo online e qualificação contínua dos alunos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <Scissors className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Técnicas Exclusivas</h3>
              <p className="text-gray-300 leading-relaxed">
                Todas as técnicas que realmente fazem a diferença no mercado, sem esconder nenhum segredo profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-yellow-500">alunos dizem</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-xl text-yellow-500 font-bold">4.7/5</span>
              <span className="text-gray-400">baseado em 107 avaliações</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Melhor curso de todos!"
              </p>
              <p className="text-yellow-500 font-semibold">- Daniel</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "A minha experiência foi realizadora. Aprendi mais neste curso do que no presencial que recém fiz."
              </p>
              <p className="text-yellow-500 font-semibold">- Neusvaldo</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Excelente conteúdo e didática excepcional!"
              </p>
              <p className="text-yellow-500 font-semibold">- Weverton</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Transforme sua carreira HOJE!
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Junte-se aos mais de 5.000 alunos que já transformaram suas vidas com o Barber HIT. Sua nova carreira como barbeiro profissional começa agora!
          </p>
          
          <div className="bg-black/20 p-6 rounded-xl mb-8 max-w-lg mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-black mr-2" />
              <p className="text-xl font-bold text-black">OFERTA POR TEMPO LIMITADO!</p>
            </div>
            <div className="space-y-3 text-left mb-6">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-1" />
                <p className="text-black/90">Preço promocional válido somente até <span className="font-bold">10/08/2025</span></p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-1" />
                <p className="text-black/90">Apenas <span className="font-bold">7 vagas</span> restantes com este valor</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-1" />
                <p className="text-black/90">Próximo lote com <span className="font-bold">aumento de 30%</span> no valor</p>
              </div>
            </div>
            <div className="text-center text-black font-bold">
              Não perca esta oportunidade única!
            </div>
          </div>
          
          <a 
            href="https://go.hotmart.com/D101160980B?dp=1" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              return gtag_report_conversion('https://go.hotmart.com/D101160980B?dp=1');
            }}
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Play className="inline h-6 w-6 mr-2" />
            COMEÇAR AGORA
          </a>
          
          <p className="text-black/60 mt-6 text-sm">
            ✅ Acesso imediato • ✅ Suporte completo • ✅ Certificado de conclusão
          </p>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que você vai <span className="text-yellow-500">aprender</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Um conteúdo completo e estruturado para transformar você em um barbeiro profissional de sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fundamentos da Barbearia</h3>
                  <p className="text-gray-300">Aprenda desde o básico até técnicas avançadas de corte e acabamento profissional.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Técnicas de Corte Modernas</h3>
                  <p className="text-gray-300">Domine os cortes mais procurados e tendências atuais do mercado.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Atendimento ao Cliente</h3>
                  <p className="text-gray-300">Como criar uma experiência única e fidelizar seus clientes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gestão de Negócios</h3>
                  <p className="text-gray-300">Transforme sua paixão em um negócio lucrativo e sustentável.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Marketing Digital</h3>
                  <p className="text-gray-300">Estratégias para divulgar seu trabalho e atrair mais clientes online.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">6</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Precificação Estratégica</h3>
                  <p className="text-gray-300">Como definir preços justos e aumentar sua margem de lucro.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">7</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mindset Empreendedor</h3>
                  <p className="text-gray-300">Desenvolva a mentalidade necessária para o sucesso profissional.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">8</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certificação Profissional</h3>
                  <p className="text-gray-300">Receba seu certificado e comprove sua qualificação no mercado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas <span className="text-yellow-500">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas sobre o Barber HIT
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-yellow-500/20">
              <h3 className="text-xl font-bold mb-3 text-yellow-500">O curso é totalmente online?</h3>
              <p className="text-gray-300">
                Sim! O Barber HIT é 100% online, permitindo que você estude no seu ritmo, quando e onde quiser. Você terá acesso vitalício ao conteúdo.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-yellow-500/20">
              <h3 className="text-xl font-bold mb-3 text-yellow-500">Preciso ter experiência prévia?</h3>
              <p className="text-gray-300">
                Não! O curso foi desenvolvido tanto para iniciantes quanto para barbeiros experientes que querem aprimorar suas técnicas e expandir seus negócios.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-yellow-500/20">
              <h3 className="text-xl font-bold mb-3 text-yellow-500">Quanto tempo tenho para concluir o curso?</h3>
              <p className="text-gray-300">
                Você tem acesso vitalício ao conteúdo! Pode estudar no seu próprio ritmo, revisitar as aulas quantas vezes quiser e acompanhar as atualizações.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-yellow-500/20">
              <h3 className="text-xl font-bold mb-3 text-yellow-500">Recebo certificado de conclusão?</h3>
              <p className="text-gray-300">
                Sim! Ao concluir o curso, você receberá um certificado digital que comprova sua qualificação profissional na área de barbearia.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-yellow-500/20">
              <h3 className="text-xl font-bold mb-3 text-yellow-500">Existe suporte durante o curso?</h3>
              <p className="text-gray-300">
                Claro! Você terá acesso a suporte completo para tirar dúvidas e receber orientações durante toda sua jornada de aprendizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ⚠️ ATENÇÃO: Vagas Limitadas!
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Para garantir a qualidade do ensino e suporte personalizado, temos um número limitado de vagas por turma. 
            <span className="font-bold text-white"> Não perca esta oportunidade!</span>
          </p>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-red-400/30 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-yellow-500 mb-2">5.000+</div>
                <div className="text-red-100">Alunos Transformados</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-500 mb-2">4.7★</div>
                <div className="text-red-100">Avaliação Média</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-500 mb-2">8 Anos</div>
                <div className="text-red-100">de Experiência</div>
              </div>
            </div>
          </div>
          
          <a 
            href="https://go.hotmart.com/D101160980B?dp=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse"
          >
            🚀 GARANTIR MINHA VAGA AGORA
          </a>
          
          <p className="text-red-200 mt-6 text-sm">
            ✅ Acesso imediato após a compra • ✅ Garantia de 7 dias • ✅ Suporte vitalício
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Scissors className="h-8 w-8 text-yellow-500" />
            <h3 className="text-2xl font-bold">Felippe Caetano Treinamentos</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Transformando barbeiros em empreendedores de sucesso desde 2016
          </p>
          <div className="flex items-center justify-center space-x-6 mb-6 text-gray-400">
            <span>Política de Privacidade</span>
            <span>•</span>
            <span>Termos de Uso</span>
            <span>•</span>
            <span>Contato</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Felippe Caetano Treinamentos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;