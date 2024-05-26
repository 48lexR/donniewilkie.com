const contact = `<h1>Contact Information</h1>
<ul>
  <li>Email Me: donnwilk@unc.edu</li>
  <li>Call Me: 828-337-9174</li>
  <li><a href="./resume.pdf">Download my Resume </a></li>
</ul>
`;

const skills = `<h1>Skills</h1>
<ul>
<li>Previous Research experience</li>
<li>Clear and concise communicator</li>
<li>Effective leader</li>
<li>Great work ethic</li>
</ul>
`;

const experience = `<h1>Experience</h1>
<ul>
  <li>Research assistant at N.C. State University in the Wilson College of Textiles.
    <ul>
    <li>I studied how different dyes chemically age and applications in forensics.</li>
    </ul>
  </li>
  <li>NC School of Science and Math Student Ambassador
  <ul>
    <li>I gave tours to incoming students and their parents.</li>
  </ul>
  </li>
  <li>NC School of Science and Math Summer Camp Counselor
  <ul>
    <li>I planned events for 150 summer camp participants including a poetry workshop, a game night, and trips to local coffee shops.</li>
  </ul>
  </li>
  <li>Joe Van Gogh Coffee Shop Barista
    <ul>
      <li>I supply over 200 customers with their daily caffeine doses including lattes, drip coffees, and matchas.</li>
    </ul> 
  </li>
</ul>
`;

const home = `<a href="https://www.linkedin.com/in/donnie-wilkie-22a316245/">
<img
  src="./dwilkie.png"
  alt="A photo of Donnie Wilkie."
  style="float: right"
/></a>

<h1>Donnie Wilkie</h1>

<p>
My name is Donnie Wilkie; I use he/him pronouns. I'm an
undergraduate first-year at UNC-Chapel Hill studying biology on the
pre-med track and sociology. I also work as a barista at Joe Van
Gogh coffee, located in Roper Hall on Columbia street. I love
anatomy, physiology, and forensics.
</p>

`;

const goSkills = () => {
  m.style.opacity = 0;
  window.setTimeout(() => {
    m.innerHTML = skills;
    m.style.opacity = 1;
  }, 500);
};

const goContact = () => {
  m.style.opacity = 0;

  window.setTimeout(() => {
    m.innerHTML = contact;
    m.style.opacity = 1;
  }, 500);
};

const goHome = () => {
  m.style.opacity = 0;
  window.setTimeout(() => {
    m.innerHTML = home;
    m.style.opacity = 1;
  }, 500);
};

const goExperience = () => {
  m.style.opacity = 0;
  window.setTimeout(() => {
    m.innerHTML = experience;
    m.style.opacity = 1;
  }, 500);
};

let m;

window.onload = () => {
  m = document.querySelector("#main");
};
