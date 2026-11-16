export interface TeamMember {
  name: string;
  /** Parts of the website this person says they worked on (from the class contribution form). */
  parts: string[];
  /** In their own words. */
  note: string;
}

export interface SupportGroup {
  label: string;
  names: string[];
  parts: string[];
  note: string;
}

/** The lead developer, shown first and shown in the featured card. */
export const lead = {
  name: 'Klint Vincent Malinao Lloren',
  role: 'Full-Stack Developer · Project Lead',
  note: 'Directed the project, designed and built the whole portal, researched and wrote the content, and shipped it live.',
};

const MAP = 'Interactive Map';
const REGION = 'Region stories';
const TRI = 'Tri-People page';
const PEACE = 'Peace Initiatives & timeline';
const IMAGES = 'Images & captions';
const DESIGN = 'Design & layout';
const CODE = 'Coding';
const SOURCES = 'Sources & fact-checking';
const PROOF = 'Proofreading & editing';
const TEST = 'Testing & feedback';
const DEMO = 'Presentation / demo';
const COORD = 'Group coordination & support';

/** Classmates who filled in the contribution form (alphabetical by first name). */
export const members: TeamMember[] = [
  { name: 'Andrei Jet Del Mundo Estanil', parts: [MAP, DESIGN], note: 'Designed and made the layout for the website and interactive map.' },
  { name: 'Angel Rose Aristales Jasmin', parts: [REGION, SOURCES, PROOF, COORD], note: 'Researched and wrote about some regions, checked facts and sources, proofread other pages for errors, and helped coordinate and motivate the group until we finished.' },
  { name: 'Cedrich Harvey Osiel Boque', parts: [REGION, PROOF], note: 'Researched the regions and proofread the details sent by classmates.' },
  { name: 'Charlce Jasper Alabat Mandin', parts: [MAP], note: 'Helped categorize Indigenous peoples in their respective regions.' },
  { name: 'Dave Dacalos Modina', parts: [SOURCES], note: 'Compiled the sources used, such as the PowerPoint presentations and PDFs, to keep the content factual and credible.' },
  { name: 'Ella Jaczine Anderson Lamanilao', parts: [TRI, PROOF], note: 'Researched and wrote content for the Tri-People page about Filipino Muslims, Lumad and Migrant-Settlers, and proofread it for typos and wording.' },
  { name: 'Erick John Uy Tablizo', parts: [PROOF, COORD], note: 'Read the website content and compared it with the sites the information came from. Gave the head developer positive energy.' },
  { name: 'French Colin Alaba Adviento', parts: [PROOF], note: 'Corrected grammatical errors and sentence structure.' },
  { name: 'Gwen Margareth Hidalgo Barro', parts: [IMAGES], note: 'Found photographs and suggested which fit each region.' },
  { name: 'Ian Dabatos Pueblo', parts: [PROOF], note: 'Proofread the Sulu page and fixed some typographical errors.' },
  { name: 'James Baluno Cuaresma', parts: [DESIGN, TEST], note: 'Helped with design, drawing on prior experience, and gave feedback from a viewer’s point of view.' },
  { name: 'Jay Barcana Robles', parts: [MAP], note: 'Checked the details of the map.' },
  { name: 'Jillana Kaye Arcilla', parts: [PROOF], note: 'Reviewed and corrected grammar, spelling, punctuation and sentence structure in the articles for clarity and consistency.' },
  { name: 'John Carlo Cometa Allosa', parts: [MAP, IMAGES, CODE], note: 'Developed the website and helped build the interactive map, including the province markers and map layers. Also gathered and integrated the images used across the site.' },
  { name: 'John Lloyd Cubalan Orillano', parts: [PROOF], note: 'Checked details before they went in, to prevent errors and misinformation and keep the information reliable and organized.' },
  { name: 'John Mark Ulbata', parts: [MAP], note: 'Helped fix errors.' },
  { name: 'Joshua Dupa Abagat', parts: [CODE, TEST], note: 'Helped with coding and identified bugs and system errors.' },
  { name: 'Justin Donaire', parts: [CODE, TEST], note: 'Tested the website to make sure everything ran smoothly without errors.' },
  { name: 'Kyle Stephen Manogura Delmo', parts: [DESIGN], note: 'Gave feedback on headings, fonts and spacing.' },
  { name: 'Macki Lapiz Arcebes', parts: [TEST], note: 'Tested and checked the navigation of the website.' },
  { name: 'Martin Carl C. Yntong', parts: [TEST], note: 'Tested the system for bugs and collected feedback from classmates to improve it.' },
  { name: 'Morcida Calolong Abdulkarim', parts: [REGION], note: 'Researched the history, culture and traditions of the Zamboanga Peninsula and helped write its regional story.' },
  { name: 'Noel Cabeje Degamo', parts: [TEST], note: 'Tested the system’s features to make sure they worked as expected.' },
  { name: 'Patricia Alexie Romares Sevilla', parts: [DESIGN, SOURCES, PROOF, TEST], note: 'Contributed to the visual design (layout, color scheme, typography and cards), verified and formatted sources and citations, proofread the content, and tested the website across devices.' },
  { name: 'Ronalita Mae Bantillo Somontan', parts: [TEST, COORD], note: 'Tested the layout and responsiveness across devices, gave feedback on minor UI adjustments, and helped coordinate group updates and workflow.' },
  { name: 'Sandie Asombrado Trazo', parts: [DESIGN], note: 'Made sure the fonts are consistent and do not overlap, and drafted the layout of the overall look.' },
  { name: 'Shania Jane Apostol Ramirez', parts: [PROOF], note: 'Flagged terms that needed a plain-language explanation.' },
  { name: 'Sittie Ainah Yahya Farouq', parts: [REGION, PEACE], note: 'Contributed to one of the region stories and to the Peace Initiatives page and its timeline.' },
  { name: 'Sofiah Gabrielle Uy Perreras', parts: [PROOF], note: 'Proofread the content.' },
  { name: 'Vivienne Rodz M. Valleser', parts: [MAP], note: 'Researched for the interactive map.' },
];

/** Classmates who have not filled in the form yet, grouped into duos and trios. */
export const groups: SupportGroup[] = [
  {
    label: 'The Testing Crew',
    names: ['Lionel Allen Balaba Agot', 'Axcel Jay Munsad Alfonso', 'Matt Manuel Jacob Savellejo Banggo'],
    parts: [TEST],
    note: 'Tried the pages on different screens and reported what looked off.',
  },
  {
    label: 'The Review Crew',
    names: ['Gian Jethro Angelo Paccial Bergado', 'Airron Troy Cayunda Chavez', 'Shana Rae Maraya Coching'],
    parts: [PROOF],
    note: 'Read through the pages and gave editing suggestions.',
  },
  {
    label: 'Language & Demo Duo',
    names: ['Veryl Miles Lumbab Diamora', 'Isaiah Hiron Buhisan Englatiera'],
    parts: [DEMO],
    note: 'Advised on Cebuano terms and helped prepare the walkthrough.',
  },
  {
    label: 'Credits & Links Duo',
    names: ['Joemar Lumapay Impa', 'Kevin Garate Lapeseros'],
    parts: [IMAGES, SOURCES],
    note: 'Checked image credits and that external links open.',
  },
  {
    label: 'Regional Context Duo',
    names: ['Faith Samonte Panes', 'Johammed Mamalo Sumandal'],
    parts: [REGION, TRI],
    note: 'Shared local context and reviewed the Tri-People section.',
  },
];
