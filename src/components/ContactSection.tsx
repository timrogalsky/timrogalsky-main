import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Get in Touch</h2>
          <p className="text-lg text-foreground text-center mb-8">
            I'd love to hear your thoughts. Please send me a message using the form below.
          </p>

          <Card className="bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">Contact Tim</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thank-you.html"
                className="space-y-6"
              >
                {/* Required hidden input for Netlify */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field (kept hidden) */}
                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" type="text" required placeholder="Your full name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" required className="min-h-32" placeholder="Your message..." />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
