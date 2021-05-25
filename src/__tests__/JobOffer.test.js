import React from "react";
import JobOffer from "../components/JobOffer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("JobDetails renders with correct elements", () => {
  const stateValues = {
    dark_mode: false,
    JOBS_ARRAY: [
      {
        company: "SweetRush",
        company_logo:
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUtqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--82886ff47e94ff4c0255b95773a9667644768b2b/SR%20Logo.png",
        company_url: "https://www.sweetrush.com/",
        created_at: "Wed May 19 00:49:17 UTC 2021",
        description:
          "<p><strong>SweetRush has an exciting opportunity for an experienced creative front-end developer (full stack is also acceptable) with an eye for graphic and UX design!</strong></p>\n<p><strong>ABOUT THE ROLE:</strong></p>\n<p>This is an important role on the Engineering and Development department’s Course Development team, and you will be reporting directly to the Course Development team lead.</p>\n<p>Historically, the developers most successful in this role contribute to multiple projects at the same time; show a willingness to improve existing techniques, frameworks, and templates; and come up with innovations of their own. You will succeed if you truly enjoy active collaboration with your colleagues and don’t mind stepping in when your help is required.</p>\n<p>This is a remote position and a great opportunity to work from home. Candidates from all geographic locations are welcome to apply; however, our development team is mostly based in North and Latin America, and you should be willing to work during our business hours.</p>\n<p><strong>REQUIRED SKILLS:</strong></p>\n<p><strong>Front end</strong></p>\n<ul>\n<li>7+ years as a front-end or full-stack developer in a creative environment</li>\n<li>Expert-level JavaScript skills—Vanilla JS expertise is as important as the knowledge of frameworks and libraries</li>\n<li>High level of competency in HTML5 and CSS3</li>\n<li>Familiarity with one or more frameworks, preferably <strong>React and Node.js</strong>\n</li>\n<li>While React is the most commonly used framework at the moment, your proven ability to quickly harness unfamiliar technology is more important than an intimate knowledge of any of the given frameworks.</li>\n<li><strong>Most importantly - you can look at just about any cool effect, interaction, animation, parallax, website on the web, and say - Even if I can’t do this now, I want to try!</strong></li>\n<li>Understanding of responsive design and mobile-first principles</li>\n</ul>\n<p><strong>Soft skills and generic productivity tools</strong></p>\n<ul>\n<li>Ability to clearly communicate in English</li>\n<li>English verbal communication skills are an absolute must because the position requires frequent interaction with peers and clients.</li>\n<li>Experience with version control systems such as Git or Subversion</li>\n<li>Experience working in a team development environment or demonstrating a capacity to do so</li>\n<li>Enjoy learning and experimenting, open to new ideas</li>\n</ul>\n<p><strong>YOU WILL IMPRESS EVERYONE IF YOU:</strong></p>\n<ul>\n<li>Have built a learning simulation</li>\n<li>Have experience with mobile app development and distribution</li>\n<li>Have experience with graphic and UX design</li>\n<li>Know anything about Adapt Framework</li>\n</ul>\n<p><strong>YOU MAY BE EXPECTED TO:</strong></p>\n<ul>\n<li>Complete a test assignment</li>\n<li>Be interviewed by a number of highly judgmental yet supremely talented future colleagues</li>\n</ul>\n<p><strong>THE ESSENCE OF THE JOB</strong></p>\n<p>OK, now that you’ve made it through all the obligatory language, you may be wondering what this position is really all about. Therefore, please read the rest of this job description carefully!</p>\n<p>It all boils down to your ability to make a simple claim: <strong>I can do it!</strong></p>\n<p>If we show you an interactive website with intricate animations, a complicated menu system, and multiple interdependencies, you should state: <strong>I can do it!</strong></p>\n<p>If we need to harness a complex web-based gaming engine and use it for the first time to build a learning simulation, you should confidently assert: <strong>I can do it!</strong></p>\n<p>If we need to produce a large volume of digital training materials in a record short period of time, you should answer: <strong>I can do it!</strong></p>\n<p>And if we need an adventurous engineer to lead the team in the creation of a system that is completely different from everything we have done before, we’re most definitely looking for the loud <strong>I can do it!</strong></p>\n<p>And even more importantly, you must <strong>want to do it</strong>.</p>\n<p>SweetRush is a team of winners. These are not empty words. Just check out our impressive industry trophy shelf, which includes this recent success: <a href=\"https://www.sweetrush.com/sweetrush-wins-16-awards-brandon-hall-awards-2020\">https://www.sweetrush.com/sweetrush-wins-16-awards-brandon-hall-awards-2020</a>.</p>\n<p>As a winner, you will always want the ball. Want to do better. Want to be more creative and efficient. Join us, and let's see if we can win even more by working together!</p>\n<p>This is a work-from-home opportunity! We are 100% virtual, and all communications occur over digital channels (Skype/Web Share/email), apart from infrequent on-site meetings. Occasional travel may be required.</p>\n<p><strong>Please note: We're all about remote work and have collaborators based all around the world; however, SweetRush is a US-based company, and English is our primary language. If you'd like to be considered for this opportunity, please submit your resume in English.</strong></p>\n",
        how_to_apply:
          '<p>If this describes your interests and experience, please submit your current resume and salary requirements through the following link:\n<a href="https://www.sweetrush.com/join-us/">https://www.sweetrush.com/join-us/</a></p>\n',
        id: "32bf67e5-4971-47ce-985c-44b6b3860cdb",
        location: "Remote",
        title: "Senior Creative Front End Web Developer",
        type: "Full Time",
        url: "https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb",
      },
      {
        company: "MANDARIN MEDIEN Gesellschaft für digitale Lösungen mbH",
        company_logo:
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaCtqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8d0339b9e43b0dca160b9db73b230b6067e39b05/MANDARIN%20MEDIEN%20Gesellschaft%20fu%CC%88r%20digitale%20Lo%CC%88sungen%20mbH.jpeg",
        company_url: "https://www.mandarin-medien.de/",
        created_at: "Tue May 18 17:12:52 UTC 2021",
        description:
          '<p>2002 sind wir als Internetagentur gestartet. Heute bezeichnen wir uns als Digitalagentur. Das Spielfeld ist heute breiter und greift tiefer in bestehende Geschäftsbereiche ein. In unseren 3 Units MARKETING, DIGITAL &amp; TALENT arbeiten über 80 Macher, Nerds und Kreative nach einem Prinzip: Messbar mehr Erfolg. Das heißt konkret: Klare Ziele. Permanente Optimierung. Transparentes Reporting.</p>\n<p><strong>Wer wir sind</strong></p>\n<p>Wir sind Zuhörer, Strategen, Kreative, Experten, Kollegen, Freunde, Spaßmacher, keine Großeredenschwinger, Stille, Laute, Sprachgewandte, Texter, Erfolgshungrige, Macher.</p>\n<p><strong>WIR HELFEN MENSCHEN UND MARKEN ÜBER SICH HINAUSZUWACHSEN.\nWIR SIND MANDARIN MEDIEN!</strong></p>\n<p><strong>Das wären Deine Aufgaben</strong></p>\n<p>Wir bieten Dir einen freien Platz in unserem IT Team als Systemadministrator:in in unserer Digitalagentur in Schwerin. Mit deinem Team wirst du für unsere Kunden den digitalen Ausbau vorantreiben und die Chance bekommen unsere digitale Unit noch weiter auszubauen und größer werden zu lassen.\nChristian, Christoph, Fabrice, Gordon, Gérard, Marcel, Christoph, Moritz, Sebastian &amp; Steffen freuen sich, wenn DU ihr Team komplett machst.</p>\n<p><strong>Das wären Deine Aufgaben</strong></p>\n<ul>\n<li>Erster Ansprechpartner für deine Kunden, via Telefon, E-Mail, Remote oder auch direkt vor Ort</li>\n<li>Umgang mit verschiedenen Themen und Umgebungen\nz.B: Client-, Server-, Netzwerk- und im Cloudbereich</li>\n<li>Fehleranalyse und -beseitigung</li>\n<li>Installation, Administration und Wartung von Kundeninfrastruktur</li>\n<li>First- und Second-Level Support</li>\n<li>Projektbezogene Planung, Vorbereitung und Durchführung</li>\n</ul>\n<p><strong>Das bringst Du mit</strong></p>\n<ul>\n<li>Eine abgeschlossene Ausbildung als Fachinformatiker für Systemintegration</li>\n<li>Führerschein Klasse B</li>\n<li>Kunden- sowie Lösungsorientiertes handeln</li>\n<li>Verantwortungsbewusstsein für deine eigenständige Zeiteinteilung</li>\n<li>Bereitschaft jeden Tag dazu zu lernen und mit deinen Aufgaben zu wachsen</li>\n<li>Spaß an der Arbeit im Team und mit dem Team neue Ideen zu entwickeln</li>\n<li>Zertifizierungen im Bereich Microsoft, VMWare und Cisco wünschenswert</li>\n</ul>\n<p>Klingt ganz schön viel? Nobody is perfect! Wir lernen alle jeden Tag voneinander und nehmen uns jede Woche Zeit für Weiterbildung. Die ein oder andere Fähigkeit kannst Du also auch nach Deinem Start bei uns erlernen oder vertiefen.</p>\n<p><strong>Das bieten wir Dir</strong></p>\n<ul>\n<li>Einen spannenden und anspruchsvollen Agentur-Job in MV</li>\n<li>Eine große Bandbreite an Projekten - Handwerk bis Konzern</li>\n<li>Ein hervorragendes Arbeitsklima und kurze Entscheidungswege</li>\n<li>Zeit für Deine Weiterbildung,  je Woche, plus Budget</li>\n<li>Moderne Arbeitsmittel und neueste Programme</li>\n<li>Unterstützung Deiner Gesundheit</li>\n<li>Möglichkeit eines Fahrtkostenzuschusses</li>\n<li>Flexibles Arbeiten - von Zuhause oder einfach mal am Strand</li>\n<li>Kreative Denkpausen mit dem Boot auf dem Schweriner See</li>\n<li>Teamevents, wie z.B. Grillen, MANDARIN-Kino, Besuch des Weihnachtsmarktes uvm.</li>\n<li>Ein Büro mitten in der City sowie leckeres Obst, Kaffee, Tee, Wasser und Mate</li>\n</ul>\n<p><strong>Kontakt</strong></p>\n<p>​​​​​Passt alles für Dich?</p>\n<p>Dann sende Deine Bewerbung mit Deinen Vorstellungen zu Gehalt und Urlaub an Corinna Lepsien, <a href="mailto:jobs@mandarin-medien.de">jobs@mandarin-medien.de</a>. Falls Du gerade unterwegs bist, kannst Du uns auch einfach einen Link von Deinem Xing- oder LinkedIn Profil schicken.</p>\n<p><img src="https://camo.githubusercontent.com/26c2737b75fe2e3161d0a357a200081f9e8d0243/68747470733a2f2f742e676f686972696e672e636f6d2f682f31306564346231663739316361656138313233643961343663393034333134353938646566643238663733363838366634363661363332383333376361376130"></p>\n',
        how_to_apply:
          '<p><a href="https://t.gohiring.com/h/83f7df34249addb0bebc8dc680310d1ded43220a748ee285e27989a457dd10ea">Application form</a></p>\n',
        id: "7638eee4-4e75-4c06-a920-ea7619a311b5",
        location: "Schwerin",
        title: "Systemadministrator:in",
        type: "Full Time",
        url: "https://jobs.github.com/positions/7638eee4-4e75-4c06-a920-ea7619a311b5",
      },
    ],
  };
  const backToHomeHandler = () => {};
  const jobDetailsFlagHandler = () => {};
  const themeChanger = () => {};
  const searchQueryHandler = () => {};
  const fullTimeToggle = () => {};
  const searchButtonOnClick = () => {};

  const { getByTestId } = render(
    <JobOffer
      stateValues={stateValues}
      backToHomeHandler={backToHomeHandler}
      jobDetailsFlagHandler={jobDetailsFlagHandler}
      themeChanger={themeChanger}
      searchQueryHandler={searchQueryHandler}
      fullTimeToggle={fullTimeToggle}
      searchButtonOnClick={searchButtonOnClick}
    />
  );

  // Offer 1
  const jobOffer1 = getByTestId("job_offer_1");
  expect(jobOffer1).toBeTruthy();

  const logo1 = getByTestId("logo_1");
  expect(logo1).toBeTruthy();

  const jobTitle1 = getByTestId("job_title_1");
  expect(jobTitle1).toBeTruthy();

  const joblocation1 = getByTestId("job_location_1");
  expect(joblocation1).toBeTruthy();

  // Offer 2
  const jobOffer2 = getByTestId("job_offer_2");
  expect(jobOffer2).toBeTruthy();

  const logo2 = getByTestId("logo_2");
  expect(logo2).toBeTruthy();

  const jobTitle2 = getByTestId("job_title_2");
  expect(jobTitle2).toBeTruthy();

  const joblocation2 = getByTestId("job_location_2");
  expect(joblocation2).toBeTruthy();
});
