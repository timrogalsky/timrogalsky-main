import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PlatformSection = () => {
  const platformItems = [
    {
      title: "Excellence and Equity",
      content: "I will work to ensure that every child has access to great teaching and a genuine chance to succeed. That means building confidence and curiosity through strong academics in math, science, and literacy, enriched by experiences in the arts, athletics, and hands-on learning."
    },
    {
      title: "Preparing Students for the Future",
      content: "Our world is changing quickly. Students need solid foundations in core subjects, but also opportunities to explore technology and innovation. I will champion AI literacy and responsible tech use, so students are equipped for a future shaped by new tools and challenges."
    },
    {
      title: "Community and Belonging",
      content: "Schools should be welcoming spaces where every student belongs. I will support initiatives that reflect Winnipeg's cultural diversity, honour Indigenous knowledge and traditions, and build strong connections between families and schools."
    },
    {
      title: "Student Well-Being",
      content: "Students learn best when they feel safe and supported. I will champion mental health resources, extracurricular opportunities, and environments that help every student thrive in inclusive settings."
    },
    {
      title: "Responsible Stewardship",
      content: "I will advocate for decisions that are fiscally responsible, transparent, and environmentally sustainable. We must care for resources today and carry them forward for future students."
    }
  ];

  return (
    <section id="platform" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformItems.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-primary text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;