import timHeadshot from '../assets/tim-rogalsky-headshot.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-background pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-4">
                Tim Rogalsky
              </h1>
              <h2 className="text-2xl lg:text-3xl text-foreground mb-6">
                Candidate for School Trustee – Pembina Trails School Division (Ward 1)
              </h2>
              <div className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg text-xl font-semibold">
                "Strong Schools, Strong Futures"
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src={timHeadshot} 
                  alt="Tim Rogalsky, candidate for school trustee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
