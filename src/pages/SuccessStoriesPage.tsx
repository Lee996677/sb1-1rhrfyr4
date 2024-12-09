import { RocketLaunchIcon, CurrencyDollarIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import Grid from '../components/ui/Grid';
import CaseStudy from '../components/success/CaseStudy';

const caseStudies = [
  {
    title: 'Global Silicon Chip Manufacturer',
    industry: 'Technology',
    timeline: '6 Weeks',
    icon: <RocketLaunchIcon className="w-6 h-6 text-secondary" />,
    challenge: 'Rapid MVP validation for ARM-based chips, ensuring investor confidence and streamlined R&D processes.',
    solution: "StriveTechAI built a functional MVP within 6 weeks, leveraging Documaster AI for automated specification updates. This rapid turnaround allowed the client's engineering and management teams to stay aligned, pivot quickly, and validate market readiness.",
    results: [
      '30% reduction in engineering cycles',
      'Faster time-to-market',
      'Increased internal stakeholder confidence and clarity'
    ]
  },
  {
    title: 'Top-Tier Canadian Financial Institution',
    industry: 'Finance',
    timeline: '8 Weeks',
    icon: <CurrencyDollarIcon className="w-6 h-6 text-secondary" />,
    challenge: 'A top-five Canadian financial institution sought to explore AI investment opportunities within the oil and gas industry. They needed a comprehensive research report that identified potential avenues for AI integration, assessed market trends, and evaluated risk and ROI.',
    solution: "StriveTechAI's team conducted extensive market research, competitive analyses, and feasibility studies. We produced an in-depth AI investment opportunity report tailored to the oil and gas sector, supported by automated documentation via Documaster AI. The final deliverable included a polished presentation and visual data reports.",
    results: [
      'Received remarkable feedback on the report\'s content depth, accuracy, and strategic foresight',
      'High praise for the quality of research and data-driven recommendations',
      'Strengthened relationships and credibility with major investment banks'
    ]
  },
  {
    title: 'Global Hardware & Technology Services Firm',
    industry: 'Technology Services',
    timeline: '12 Weeks',
    icon: <ComputerDesktopIcon className="w-6 h-6 text-secondary" />,
    challenge: 'A global hardware and technology services company wanted to fast-track their AI adoption strategy. They needed multiple MVPs, technical blueprints, and workshop materials developed rapidly to present to enterprise clients.',
    solution: "StriveTechAI partnered closely with the client's innovation and product teams, quickly drafting technical blueprints, conceptual MVPs, and practical workshop materials. Leveraging Documaster AI, we maintained seamless documentation updates and version control.",
    results: [
      'Rapid delivery of MVPs and comprehensive technical materials',
      'Exceptional stakeholder feedback on clarity and strategic relevance',
      'Strengthened market position as an agile, forward-thinking AI solutions provider',
      'Increased enterprise interest and potential new partnerships'
    ]
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Section>
        <PageHeader 
          title="Client Success Stories"
          description="Real-world results from our innovative solutions. See how we've helped organizations achieve their goals through practical AI implementation."
        />
        
        <Grid cols={1} gap={8}>
          {caseStudies.map((study) => (
            <CaseStudy key={study.title} {...study} />
          ))}
        </Grid>
      </Section>
    </div>
  );
}