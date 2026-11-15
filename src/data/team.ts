export interface TeamMember {
  name: string;
  role: string;
  note: string;
}

/** The lead developer, shown first and styled as the "final boss" card. */
export const lead: TeamMember = {
  name: 'Klint Vincent Malinao Lloren',
  role: 'Full-Stack Developer · The Final Boss',
  note: 'Directed the project, designed and built the whole portal, researched and wrote the content, and shipped it live.',
};

/** Class roster for GEC110 C25-3 (alphabetical, as listed by the class). */
export const members: TeamMember[] = [
  { name: 'Joshua Dupa Abagat', role: 'Quality Assurance Tester', note: 'Clicked every button so nobody else had to.' },
  { name: 'Morcida Calolong Abdulkarim', role: 'Proofreader', note: 'Read the region stories for spelling and flow.' },
  { name: 'French Colin Alaba Adviento', role: 'Map Consultant', note: 'Sanity-checked the provinces on the interactive map.' },
  { name: 'Lionel Allen Balaba Agot', role: 'Mobile Viewport Tester', note: 'Tried the portal on small screens and reported what broke.' },
  { name: 'Axcel Jay Munsad Alfonso', role: 'Palette & Mood Advisor', note: 'Weighed in on the leather-and-brass colour scheme.' },
  { name: 'John Carlo Cometa Allosa', role: 'Citation Checker', note: 'Spot-checked that the numbered sources open and match.' },
  { name: 'Macki Lapiz Arcebes', role: 'Caption Writer', note: 'Helped word the short captions under the photographs.' },
  { name: 'Jillana Kaye Arcilla', role: 'Accessibility Reviewer', note: 'Reviewed contrast and readability of the page text.' },
  { name: 'Matt Manuel Jacob Savellejo Banggo', role: 'Timeline Fact-Checker', note: 'Cross-read the peace-process dates against the sources.' },
  { name: 'Gwen Margareth Hidalgo Barro', role: 'Image Curator', note: 'Suggested which Commons photographs fit each region.' },
  { name: 'Gian Jethro Angelo Paccial Bergado', role: 'Navigation Tester', note: 'Walked every menu path and back button.' },
  { name: 'Cedrich Harvey Osiel Boque', role: 'Tagline Brainstormer', note: 'Pitched titles and taglines for the home page.' },
  { name: 'Airron Troy Cayunda Chavez', role: 'Bug Spotter', note: 'Reported layout glitches found during review.' },
  { name: 'Shana Rae Maraya Coching', role: 'Copy Editor', note: 'Tightened wording across the About and Tri-People pages.' },
  { name: 'James Baluno Cuaresma', role: 'Deployment Cheerleader', note: 'Moral support while the site went live on Netlify.' },
  { name: 'Noel Cabeje Degamo', role: 'Source Verifier', note: 'Checked that cited books and websites actually exist.' },
  { name: 'Kyle Stephen Manogura Delmo', role: 'Typography Reviewer', note: 'Gave feedback on headings, fonts and spacing.' },
  { name: 'Veryl Miles Lumbab Diamora', role: 'Cebuano Language Consultant', note: 'Advised on the Cebuano title and local terms.' },
  { name: 'Justin Donaire', role: 'User Experience Tester', note: 'Played first-time visitor and narrated where they got lost.' },
  { name: 'Isaiah Hiron Buhisan Englatiera', role: 'Presentation Coordinator', note: 'Prepared the class for the live demonstration.' },
  { name: 'Andrei Jet Del Mundo Estanil', role: 'Region Page Reviewer', note: 'Read through the region pages for clarity.' },
  { name: 'Sittie Ainah Yahya Farouq', role: 'Cultural Sensitivity Reader', note: 'Reviewed how peoples and practices are described.' },
  { name: 'Joemar Lumapay Impa', role: 'Browser Compatibility Tester', note: 'Opened the site in different browsers.' },
  { name: 'Angel Rose Aristales Jasmin', role: 'Photo Credit Auditor', note: 'Checked that every image has its credit line.' },
  { name: 'Ella Jaczine Anderson Lamanilao', role: 'Peace Timeline Editor', note: 'Proofread the accords timeline entries.' },
  { name: 'Kevin Garate Lapeseros', role: 'Load-Speed Tester', note: 'Timed pages on slow connections.' },
  { name: 'Charlce Jasper Alabat Mandin', role: 'Documentation Support', note: 'Helped keep the README and submission notes tidy.' },
  { name: 'Dave Dacalos Modina', role: 'Link Checker', note: 'Clicked through external links to catch dead ones.' },
  { name: 'John Lloyd Cubalan Orillano', role: 'Group Liaison', note: 'Passed updates between the developer and the class.' },
  { name: 'Faith Samonte Panes', role: 'Content Reviewer', note: 'Read the Tri-People section end to end.' },
  { name: 'Sofiah Gabrielle Uy Perreras', role: 'Visual Design Advisor', note: 'Gave opinions on card layouts and spacing.' },
  { name: 'Ian Dabatos Pueblo', role: 'Feature Tester', note: 'Tried the map layers and the region tabs.' },
  { name: 'Shania Jane Apostol Ramirez', role: 'Glossary Helper', note: 'Flagged terms that needed a plain-language explanation.' },
  { name: 'Jay Barcana Robles', role: 'Accuracy Reader', note: 'Second pair of eyes on population figures and names.' },
  { name: 'Patricia Alexie Romares Sevilla', role: 'Layout Reviewer', note: 'Reported awkward line breaks and overflow.' },
  { name: 'Ronalita Mae Bantillo Somontan', role: 'Peace Initiatives Reader', note: 'Reviewed the peace-process page for readability.' },
  { name: 'Johammed Mamalo Sumandal', role: 'Regional Knowledge Consultant', note: 'Shared local context for the Sulu and Mindanao pages.' },
  { name: 'Erick John Uy Tablizo', role: 'Test Data Checker', note: 'Verified the region list and counts matched the sources.' },
  { name: 'Sandie Asombrado Trazo', role: 'Footer & Credits Reviewer', note: 'Checked the submission block and credits wording.' },
  { name: 'John Mark Ulbata', role: 'Demo Day Support', note: 'Helped set up and run the live walkthrough.' },
  { name: 'Vivienne Rodz M. Valleser', role: 'Spelling & Grammar Reviewer', note: 'Caught typos in headings and captions.' },
  { name: 'Martin Carl C. Yntong', role: 'Feedback Collector', note: 'Gathered comments from classmates after the preview.' },
];
