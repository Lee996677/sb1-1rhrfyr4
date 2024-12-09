import Section from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Section>
        <PageHeader 
          title="Contact Us"
          description="Let's discuss how we can help accelerate your innovation"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </div>
  );
}