const contact = `<h1>Get in Contact With Me</h1>
<ul>
  <li>Email Me: donnwilk@unc.edu</li>
  <li>Call Me: 828-337-9174</li>
  <li><a href="./resume.pdf">Download my Resume </a></li>
</ul>
`;

const skills = `<h1>Skills and Experience</h1>
<p>
  I have a plethora of experience. While in high school, I served as a
  research assistant at the N.C. State University, Wilson College of
  Textiles by studying how different dyes age chemically. I also was a
  student ambassador, giving tours to incoming students and their
  parents.
</p>
<p>
  Moreover, I have a myriad of skills. In addition to my research
  experience at the Wilson College of Textiles and through classes
  like Classical Genetics. I also learned how to be an effective
  leader through my previous job as an NCSSM Summer Accelerator camp
  counselor.
</p>
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
  main.style.opacity = 0;
  window.setTimeout(() => {
    main.innerHTML = skills;
    main.style.opacity = 1;
  }, 500);
};

const goContact = () => {
  main.style.opacity = 0;

  window.setTimeout(() => {
    main.innerHTML = contact;
    main.style.opacity = 1;
  }, 500);
};

const goHome = () => {
  main.style.opacity = 0;
  window.setTimeout(() => {
    main.innerHTML = home;
    main.style.opacity = 1;
  }, 500);
};

let main;

window.onload = () => {
  main = document.querySelector("#main");
};
