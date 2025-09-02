import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PlatformSection = () => {
  const platformItems = [
    {
      title: "Excellence and Equity",
      content: "Every child deserves access to great teaching and the chance to succeed. That means strong academics in math, science, and literacy, along with the arts, athletics, and hands-on learning."
    },
    {
      title: "Preparing Students for the Future",
      content: "Our world is changing quickly. Students need solid foundations in traditional subjects, but also opportunities to explore technology and creativity. I will champion AI literacy and responsible technology use, so students are equipped to thrive in a future shaped by new tools and challenges."
    },
    {
      title: "Community and Belonging",
      content: "Schools should be welcoming spaces where every student feels they belong. I will support initiatives that reflect the cultural and Indigenous diversity of Winnipeg and build strong connections between families and schools."
    },
    {
      title: "Responsible Stewardship",
      content: "I will advocate for decisions that are fiscally responsible, transparent, and environmentally sustainable, ensuring that resources are used wisely for today and tomorrow."
    },
    {
      title: "Student Well-Being",
      content: "Learning happens best when students feel safe, supported, and encouraged. I will champion mental health resources, extracurriculars, and programs that build resilience and confidence."
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