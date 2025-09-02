const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">About Tim</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I've spent my career teaching mathematics at Canadian Mennonite University, 
              where I help students think critically, work collaboratively, and find joy in learning.
            </p>
            <p>
              I believe education is a sacred trust. Our schools are the heart of our community — 
              they are where our kids grow, where families connect, and where our future is being 
              shaped every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;