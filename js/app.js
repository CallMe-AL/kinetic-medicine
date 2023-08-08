const headshotImgConts = document.querySelectorAll('.headshot-img-container');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

const servicesItems = [
  {
    "id": 1,
    "service": "Massage Therapy",
    "desc": "Massage therapy is a type of treatment in which a trained and certified massage therapist manipulates the soft tissues of your body. Massage therapy can help relieve musculoskeletal pain, increase circulation, decrease muscle tension, reduce stress, rehabilitate sports injuries, as well as provide relaxation and aid in general wellness.",
    "img": "../imgs/services-imgs/min/massage-therapy-v2.png"
  },
  {
    "id": 2,
    "service": "Sports Chiropractic",
    "desc": "Sports chiropractors focus their care on the relationship between joint restrictions and their resulting effect on movement throughout the rest of the body. This requires a comprehensive understanding of biomechanics in order to understand and treat joint restrictions in the spine and extremities with modern, research-based chiropractic techniques.",
    "img": "../imgs/services-imgs/min/sports-chiro.png"
  },
  {
    "id": 3,
    "service": "Dry Needling",
    "desc": "Dry needling is a treatment that involves a very thin needle being inserted through the skin into a muscle to stimulate a trigger point. It may release the tight muscle bands associated with trigger points and lead to decreased pain and improved function as well as stimulate a chemical and neurological healing response. Although the needles are similar to acupuncture needles, the placement of dry needles is different and based on the location of trigger points or functional deficits that may be contributing to the area of complaint.",
    "img": "../imgs/services-imgs/min/dry-needling.png"
  },
  {
    "id": 4,
    "service": "IASTM",
    "desc": "Instrument-Assisted Soft Tissue Mobilization (IASTM) is a manual therapy technique in which clinicians utilize stainless steel instruments to effectively and efficiently treat areas exhibiting soft tissue dysfunction, fibrosis, or chronic inflammation. IASTM addresses scar tissue and fascial restrictions while encouraging increased blood flow to the muscles resulting in improved patient outcomes.",
    "img": "../imgs/services-imgs/min/iastm.png"
  },
  {
    "id": 5,
    "service": "Active Release Therapy",
    "desc": "During these manual therapy treatments a provider uses their hands with precise tension and specific movements to relieve tissue tension, restore full range of motion, and break up fibrosis/adhesions. This is an effective form of treatment for muscle, fascia, tendon, nerve, and ligament injuries.",
    "img": "../imgs/services-imgs/min/active-release-therapy.png"
  },
  {
    "id": 6,
    "service": "Cupping Therapy",
    "desc": "Cupping therapy or myofascial decompression is a form of soft tissue treatment which involves the specific placement of silicone or glass cups on the skin to create a suction. Cupping is used for the treatment of adhesions/scar tissue, trigger points, and restricted myofascial lines of movement. This is accomplished by decompressing the affected myofascial tissues, reducing inflammation, increasing blood flow, increasing nutrient exchange, and subsequently providing pain relief and return to function.",
    "img": "../imgs/services-imgs/min/cupping-therapy-v2.png"
  },
  {
    "id": 7,
    "service": "Biomechanical Taping",
    "desc": "Dynamic Tape, the premier biomechanical tape, is an innovative class of tape that is principally distinct from kinesiology tape. This class of tape acts mechanically like a spring to strongly decelerate or assist motion to improve movement patterns. This can help reduce load on injured or overworked structures like a muscle strain, ankle sprain, tennis elbow, or plantar fasciitis (to name a few) and can assist where weakness is present. Indications for biomechanical tape are grounded firmly in research encompassing pain science and biomechanics.",
    "img": "../imgs/services-imgs/min/biomechanical-taping.png"
  },
  {
    "id": 8,
    "service": "Corrective Exercise Programming",
    "desc": "The programming of functional rehabilitation exercises for corrective or therapeutic benefit involves a specific series of movements custom designed to meet each patient’s specific needs based on their injury and biomechanical assessment. These corrective exercises not only rehabilitate the injured tissues, but also assist in preventing the injury from reoccurring by correcting the underlying poor biomechanics that led to the injury in the first place.",
    "img": "../imgs/services-imgs/min/Corrective-Exercise-Programming.png"
  },
]

const chiropractors = [
  {
      "id": "1",
      "name": "Dr. Taylor Ptacek",
      "title": "Sports Chriopractor",
      "headshot": '../imgs/kinetic-assets/taylor-ptacek-headshot.png',
      "education": [
        "B.S., Kinesiology and Human Performance",
        "Doctor of Chiropractic Medicine,",
        "Logan College of Chiropractic"
      ],
      "bio": "Dr. Taylor Ptacek specializes in soft tissue and sports-related injuries with a passion for helping athletes in the Denver community. His experience and versatility allow him to work with active individuals from all backgrounds ranging from professional athletes to weekend warriors. \n \n As the lead sports injury doctor at Kinetic Sports Medicine & Rehab, Dr. Ptacek incorporates proven protocols used on competitive athletes with a wide array of functional and soft tissue treatment options. He has worked extensively with dozens of professional athletes and specializes in treating functional fitness athletes, strength & conditioning athletes, runners, triathletes, and all youth sports athletes.",
      "specialties": "Dry Needling, Active Release Therapy, Instrument Assisted Soft Tissue Mobilization (IASTM), Chiropractic Spinal and Extremity Manipulation, Cupping, Kinesiology Taping, Functional Rehabilitation Exercises, Sports Nutrition, and Injury Prevention"
    },
    {
      "id": "2",
      "name": "Kat Sanders",
      "title": "Licensed Massage Therapist",
      "headshot": '../imgs/kinetic-assets/kat-modal.png',
      "education": [
        "The Denver School of Massage Therapy"
      ],
      "bio": "Kat is a Colorado native and graduate of The Denver School of Massage Therapy. While attending DSMT, she found her passion for the human body. She found that one of the most important parts of massage therapy is not the bodywork itself but the connection with one human being to another.\n\nKat has treated clients in chronic hypertonicity since 2016. She has worked with many clients including MMA fighters, double-amputees, Olympic-trained athletes, severe scoliosis, disc herniation, etc. Her goal is to influence her clients into taking better approaches to achieve peak performance in their body by creating initial muscle manipulation. Kat blends together many different modalities including trigger point and myofascial release in her deep tissue therapy to achieve the best results.",
      "specialties": "Deep Tissue Therapy, Trigger Point Therapy, Myofascial release therapy, Sports Massage, Cranial Sacral, Lymphatic Drainage, Prenatal Massage, Cupping Therapy"
    }
]

const faqQuestions = [
  {
    "id": 1,
    "question": "Why don't you accept insurance?",
    "answer": "We believe that we are able to provide a higher standard of care and provide the best treatment possible without having to deal with the constraints and challenges of the insurance industry. Without having to go through insurance we are able to provide longer doctor-patient encounters and focus on getting the patient better as quickly as possible.",
  },
  {
    "id": 2,
    "question": "How do I book an appointment?",
    "answer": "The best way to make an appointment is to book online. Click the \"contact us\" button or any of the booking buttons on this page. If you have never seen Dr. Ptacek before choose “New Patient Exam” and if you have seen Dr. Ptacek before then choose the appropriate treatment length. Next, find a time that works for you and you’re all set!",
  },
  {
    "id": 3,
    "question": "How do I decide what appointment length to accept?",
    "answer": "The length of follow-up visits will be determined during the initial examination. The vast majority of Dr. Ptacek’s patients require 30 minutes. In general, 15-minute appointments are for a single complaint/injury or for just chiropractic care. 30-minute appointments are required for more complex injuries or multiple complaints. Longer appointments can be scheduled for those requiring extensive treatment in one session.",
  },
  {
    "id": 4,
    "question": "What should I expect during my first appointment?",
    "answer": "During your first appointment the doctor will spend time discussing your injury and concerns, perform an examination, begin treatment, and provide education on the injury. Recommendations for follow-up, prognosis, and at-home therapy instructions will also be discussed.",
  },
  {
    "id": 5,
    "question": "Will I receive treatment during my initial examination?",
    "answer": "Treatment is always performed during the initial visit unless the examination reveals a contraindication to treatment, need for diagnostic imaging, or need for other further investigation before treatment can be started.",
  },
  {
    "id": 6,
    "question": "What is the cost of treatment?",
    "answer": "Treatment costs vary depending on the length of treatment and are displayed in the online booking platform. The average patient requires a 30 minute treatment which is $75. Treatment cost is determined by time rather than the number of techniques/services performed. This allows the doctor to utilize as many various treatments as necessary for the most effective treatment possible without having cost vary or become a factor.",
  },
  {
    "id": 7,
    "question": "Do you offer discounted rates?",
    "answer": "Yes, we offer a 10% reduced rate for all veteran and active duty military as well as first responders such as police, fire, and EMT.",
  },
  {
    "id": 8,
    "question": "What is your cancellation policy?",
    "answer": "We understand that things come up unexpectedly! For any rescheduling or cancellation of appointments we appreciate a 24 hour notice. For any appointments that are not rescheduled at least 2 hours prior to the start of the scheduled appointment or for any missed appointments there will be no cancellation fee for the first time that this occurs. The second time that this occurs the patient will be billed 50% of treatment cost and each time thereafter will be billed 100% of treatment cost.",
  },
  {
    "id": 9,
    "question": "I see this is a sports injury clinic. What if I'm not an athlete?",
    "answer": "Although we specialize in the treatment of sports injuries for athletes and active individuals, we enjoy working with individuals of all ages and backgrounds. Dr. Ptacek completed his chiropractic residency at a hospital specializing in complex cases and spent five years gaining experience in the pediatric field before attending chiropractic school. An injury to the low back, shoulder, knee, or neck may require different considerations for different individuals but the pathology and course of treatment are relatively the same.",
  },
  {
    "id": 10,
    "question": "Do you work with teams?",
    "answer": "Yes, we love to work with teams and large groups! We’re happy to build partnerships with different sports teams to provide discounted rates and easier access to treatment. For speaking engagements on special topics or large group assessments whether it be with sports teams, businesses, or organizations please email us.",
  },
]

const expandAccordion = (accordion) => {
  const contentHeight = accordion.children[0].offsetHeight;
  accordion.setAttribute('style', 'height: ' + contentHeight + 'px')
}

const shrinkAccordions = () => {
  const accordionContent = document.querySelectorAll('.accordion-content');

  accordionContent.forEach(accordion => {
    accordion.setAttribute('style', 'height: 0px');
  });
}

const addFaqListeners = () => {
  const accordionBtns = document.querySelectorAll('.accordion-btn');
  const accordionContent = document.querySelectorAll('.accordion-content');
  const accordionSection = document.querySelector('.faq-accordion');

  accordionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemToggle = btn.getAttribute('aria-expanded');

      shrinkAccordions();

      // checks first to see if the clicked element is already open
      // if so, close it
      const sibHeight = e.currentTarget.nextElementSibling.offsetHeight;

      if (sibHeight > 0) {
        shrinkAccordions();
        e.currentTarget.setAttribute('aria-expanded', 'false')
        return;
      }

      const sibling = btn.nextElementSibling;
      expandAccordion(sibling);
    
      for (i = 0; i < accordionBtns.length; i++) {
        accordionBtns[i].setAttribute('aria-expanded', 'false');
      }
    
      if (itemToggle == 'false') {
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

const populateAccordions = () => {
  populateServices();
  populateFaqs();
  addFaqListeners();
}

const populateServices = () => {
  const servicesItemCont = document.querySelector('[data-services-item-cont]');
  const servicesItem = document.querySelector('[data-services-item]');

  servicesItems.forEach(i => {
    const item = servicesItem.content.cloneNode(true).children[0];

    const title = item.querySelector('[data-services-item-title]');
    const desc = item.querySelector('[data-services-item-desc]');
    const btn = item.querySelector('[data-services-item-btn]');

    title.textContent = i.service;
    desc.textContent = i.desc;
    btn.setAttribute('data-id', `${i.id}`);

    // btn.addEventListener('click', () => {
    //   const servicesImg = document.querySelector('[data-services-img]');
    //   const id = i.id;

    //   const clickedService = servicesItems.find(service => service.id === id);
    //   if (!clickedService) return;
    //   const servicesImgPath = clickedService.img;

    //   servicesImg.src = servicesImgPath;
    //   servicesImg.alt = clickedService.service + ' image';

    // });

    btn.addEventListener('click', () => {
      const servicesImgs = document.querySelectorAll('[data-services-img-id]');
      const mainImg = document.querySelector('.services-img.main-img');
      const id = i.id;
      const expanded = btn.getAttribute('aria-expanded');

      // if clicking the first accordion, back out after ensuring img is not deactive
      if (id === 1) {
        if (mainImg.classList.contains('deactive')) {
          mainImg.classList.remove('deactive');
          servicesImgs.forEach(img => {
            img.classList.remove('active');
          });
        }
        return;
      }

      mainImg.classList.add('deactive');
      servicesImgs.forEach(img => {
        if (img.classList.contains('active')) {
          img.classList.remove('active');
          img.classList.add('deactive');
          // adds delay to allow deactivation transition
          setTimeout(() => {
            img.classList.remove('deactive');
          }, 600);
        }
        img.classList.remove('active');
      })

      servicesImgs.forEach(img => {   
        // looks for "true" because on initial click, aria expanded won't have changed yet
        // prevents active class being re-added if user closes a service accordion
        if (expanded === 'true') {
          mainImg.classList.remove('deactive');
          return;
        };     
        const imgId = img.dataset.id;

        // == bc imgid is str, id is num
        if (imgId == id) {    
          img.classList.add('active');
        }
      })
      // const clickedService = servicesItems.find(service => service.id === id);
      // if (!clickedService) return;
      // const servicesImgPath = clickedService.img;

      // servicesImg.src = servicesImgPath;
      // servicesImg.alt = clickedService.service + ' image';

    });

    servicesItemCont.append(item);
  });
}

const populateFaqs = () => {
  const faqAccordion = document.querySelector('[data-faq-accordion-section]');
  const faqSectionItem = document.querySelector('[data-faq-item]');

  faqQuestions.forEach(q => {
    const item = faqSectionItem.content.cloneNode(true).children[0];

    const question = item.querySelector('[data-faq-question]');
    const answer = item.querySelector('[data-faq-answer]');

    question.textContent = q.question;
    answer.textContent = q.answer;

    faqAccordion.append(item);
  });
}

// *------- modal functions -------*
const populateModal = (chiropractor) => {
  const modalImg = document.querySelector('[data-name="modal-img"]');
  const chiroName = document.querySelector('[data-name="chiro-name"]');
  const chiroTitle = document.querySelector('[data-name="chiro-title"]');
  const scheduleWith = document.querySelector('[data-name="schedule-with"]');
  const chiroEducation = document.querySelector('[data-name="chiro-education"]');
  const chiroBio = document.querySelector('[data-name="chiro-bio"]');
  const chiroSpecialties = document.querySelector('[data-name="chiro-specialties"]');

  // clears education items before loading so there's no repeats
  while (chiroEducation.firstChild) {
    chiroEducation.removeChild(chiroEducation.lastChild);
  }

  modalImg.src = chiropractor.headshot;
  modalImg.alt = chiropractor.name;
  chiroName.textContent = chiropractor.name;
  chiroTitle.textContent = chiropractor.title;
  chiroBio.textContent = chiropractor.bio;
  chiroSpecialties.textContent = chiropractor.specialties;
  scheduleWith.textContent = `Schedule with ${chiropractor.name}`;

  // education portion
  chiropractor.education.forEach(place => {
    let li = document.createElement("li");
    li.textContent = place;

    chiroEducation.append(li);
  });
}

const openModal = (e) => {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
  const id = e.currentTarget.getAttribute('data-id');
  const chiropractor = chiropractors.find(person => person.id === id)
  populateModal(chiropractor);
}

const closeModal = (e) => {
  if (e.target !== overlay && e.target !== closeBtn && e.target !== closeBtn.firstElementChild) return;
  
  if (overlay.classList.contains('open')) {
    const modalImg = document.querySelector('[data-name="modal-img"]');
    // prevents jump ocassionally occuring when switching images
    modalImg.src = '';
    overlay.classList.remove('open');
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    return;
  }
}

headshotImgConts.forEach(cont => {
  cont.addEventListener('click', openModal);
});

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

window.addEventListener('load', () => {
  shrinkAccordions();
  populateAccordions();
});