(function () {

    'use strict';

    var querystring = window.location.search;

    //write same code for all the links in the page but without jquery
    var links = document.getElementsByTagName('a');
    for(var i = 0; i < links.length; i++)
    {
        var href = links[i].getAttribute('href');
        href += querystring;
        links[i].setAttribute('href', href);
    }

    // menu
    function initMenu() {
        const menu = document.querySelector('.menu');
        if (!menu) return

        const menuContent = `<div class="menu__inner">
            <div class="menu__content">
                <div class="menu__body">
                    <ul class="menu__list">
                        <li class="menu__item"><a href="/" class="menu__link menu__link--home is-active">Home</a></li>
                        <li class="menu__item"><a href="/pricing/" class="menu__link menu__link--pricing">Pricing</a></li>
                        <li class="menu__item"><a href="/shipping/" class="menu__link menu__link--shipping">Discreet Packaging</a></li>
                        <li class="menu__item"><a href="/privacy/" class="menu__link menu__link--privacy">Privacy and Security</a></li>
                        <li class="menu__item"><a href="/satisfaction/" class="menu__link menu__link--money-back">Money Back Guarantee</a></li>
                        <li class="menu__item"><a href="/mission/" class="menu__link menu__link--mission">Our Mission</a></li>
                        <li class="menu__item"><a href="/charity/" class="menu__link menu__link--charitable">Our Charitable Efforts</a></li>
                        <li class="menu__item"><a href="https://members.fridayplans.com/login" class="menu__link menu__link--account">Manage Account</a></li>
                        <li class="menu__item"><a href="/faq/" class="menu__link menu__link--faq">frequently asked questions</a></li>
                        <li class="menu__item"><a href="/contact-us/" class="menu__link menu__link--contact">Contact Us</a></li>
                    </ul>
                </div>
                <div class="menu__foot">
                    <div class="menu__copyright">© <span class="js-years"></span> FridayPlans, Inc.</div>
                </div>
            </div>
        </div>
        <div class="menu__overlay"></div>`

        menu.insertAdjacentHTML('beforeend', menuContent);
    }

    // highlight menu
    function highlightMenu() {
        const menu = document.querySelector('.menu');
        if (!menu) return

        const currentURL = window.location.href.toLowerCase();

        const linkHome = menu.querySelector('.menu__link--home');
        const linkPricing = menu.querySelector('.menu__link--pricing');
        const linkShipping = menu.querySelector('.menu__link--shipping');
        const linkPrivacy = menu.querySelector('.menu__link--privacy');
        const linkMoneyBack = menu.querySelector('.menu__link--money-back');
        const linkMission = menu.querySelector('.menu__link--mission');
        const linkCharitable = menu.querySelector('.menu__link--charitable');
        const linkAccount = menu.querySelector('.menu__link--account');
        const linkFAQ = menu.querySelector('.menu__link--faq');
        const linkContact = menu.querySelector('.menu__link--contact');

        const links = menu.querySelectorAll('.menu__link');
        links.forEach(link => link.classList.remove('is-active'));

        if (currentURL.includes("/pricing")) {
            linkPricing.classList.add('is-active');
        }
        else if (currentURL.includes("/shipping")) {
            linkShipping.classList.add('is-active');
        }
        else if (currentURL.includes("/privacy")) {
            linkPrivacy.classList.add('is-active');
        }
        else if (currentURL.includes("/satisfaction")) {
            linkMoneyBack.classList.add('is-active');
        }
        else if (currentURL.includes("/mission")) {
            linkMission.classList.add('is-active');
        }
        else if (currentURL.includes("/charity")) {
            linkCharitable.classList.add('is-active');
        }
        else if (currentURL.includes("https://members.fridayplans.com/login")) {
            linkAccount.classList.add('is-active');
        }
        else if (currentURL.includes("/faq")) {
            linkFAQ.classList.add('is-active');
        }
        else if (currentURL.includes("/contact-us")) {
            linkContact.classList.add('is-active');
        }
        else {
            linkHome?.classList.add('is-active');
        }
    }

    // navbar
    function initNavbar() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const navbarHamburger = navbar.querySelector('.navbar__hamburger');

        const menu = document.querySelector('.menu');
        const menuOverlay = menu?.querySelector('.menu__overlay');

        if (!navbarHamburger || !menu || !menuOverlay) {
            return;
        }

        function toggleMenu() {
            navbarHamburger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
            document.querySelector('html').classList.toggle('is-lock');
        }

        function closeMenu() {
            navbarHamburger.classList.remove('is-active');
            menu.classList.remove('is-active');
            document.querySelector('html').classList.remove('is-lock');
        }

        document.addEventListener('click', (event) => {
            const isClickInsideMenu = menu.contains(event.target) || navbarHamburger.contains(event.target);
            if (!isClickInsideMenu && menu.classList.contains('is-active')) {
                closeMenu();
            }
        });

        navbarHamburger.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', closeMenu);
    }


    // reviews
    function initReviews() {
        const reveiws = document.querySelector('.reviews');
        if (!reveiws) return;

        const reviewsBtnMore = reveiws.querySelector('.reviews__btn-more');
        if (!reviewsBtnMore) return;

        function showReviewsMore() {
            reveiws.classList.add('is-show');
        }

        reviewsBtnMore.addEventListener('click', showReviewsMore);
    }

    // safety
    function initSafety() {
        const safetyBtnMore = document.querySelector('.footer__btn-more');
        if (!safetyBtnMore) return;

        const safety = document.querySelector('.safety');
        if (!safety) return;

        const safetyContent = `<div class="safety__inner">
        <h2 class="safety__title">Generic Viagra</h2>
        <p class="safety__paragraph">
            Active Ingredient: Sildenafil (Sildenafil Citrate)<br>
            Brand Names: Viagra, Revatio<br>
            Sildenafil is prescription medicine used to treat erectile dysfunction (ED).<br>
            Sildenafil is not for women or children.
        </p>

        <h2 class="safety__title">Generic Cialis</h2>
        <p class="safety__paragraph">
            Active Ingredient: Tadalafil<br>
            Brand Names: Cialis, Adcirca<br>
            Tadalafil is prescription medication used to treat erectile dysfunction (ED).<br>
            Tadalafil is not for women or children.
        </p>

        <h2 class="safety__title">Do not take Sildenafil or Tadalafil if you take any medicines called nitrates,</h2>
        <p class="safety__paragraph">
            often prescribed for chest pain, or guanylate cyclase stimulators like Adempas (riociguat) for pulmonary hypertension. Your blood pressure could drop to an unsafe level.
        </p>

        <h2 class="safety__title">Do not take Sildenafil or Tadalafil if you use recreational drugs,</h2>
        <p class="safety__paragraph">
            including but not limited to "Poppers" (amyl nitrate and/or butyl nitrate), Cocaine, Methamphetamine, or MDMA.
        </p>

        <h2 class="safety__title">Do not take Sildenafil if you are allergic to Sildenafil or any of the ingredients in Generic Viagra.</h2>

        <h2 class="safety__title">Do not take Tadalafil if you are allergic to Tadalafil or any of the ingredients in Generic Cialis.</h2>
        <p class="safety__paragraph">
            Discuss your health with your doctor to ensure that you are healthy enough for sex. Sildenafil/Tadalafil can cause a drop in blood pressure which may cause dizziness and, in rare cases, loss of consciousness. Do not operate heavy machinery until you know how Sildenafil/Tadalafil affects you. Although rare, serious side effects can occur and include chest pain or pressure, palpitations, shortness of breath, impaired mental status or mentation, erections lasting 4 or more hours, and changes in vision or hearing. If you experience any of these, it is recommended that you go to the emergency room or call 911 immediately.
        </p>

        <h2 class="safety__title">Sildenafil and Tadalafil can cause serious side effects. Rare but serious side effects include:</h2>
        <ul class="safety__list">
            <li class="safety__item">An erection that will not go away (priapism). If you have an erection that lasts more than 4 hours, get medical help right away. If it is not treated right away, priapism can permanently damage your penis.</li>
            <li class="safety__item">Sudden vision loss in one or both eyes. Sudden vision loss in one or both eyes can be a sign of a serious eye problem called non-arteritic anterior ischemic optic neuropathy (NAION). Stop taking Sildenafil and call your healthcare provider right away if you have any sudden vision loss.</li>
            <li class="safety__item">Sudden hearing decrease or hearing loss. Some people may also have ringing in their ears (tinnitus) or dizziness. If you have these symptoms, stop taking Sildenafil and contact a doctor right away.</li>
            <li class="safety__item">Low blood pressure. Some individuals may experience low blood pressure after using Sildenafil. While this will typically cause dizziness, in extreme cases, it could lead to loss of consciousness and other serious and life-threatening complications. If you have high or low blood pressure, take medications that can affect blood pressure, or have a history of heart attack, stroke, or transient ischemic attack (TIA), you should consult with your primary care doctor before taking Sildenafil.</li>
        </ul>

        <h2 class="safety__title">Before you take Sildenafil or Tadalafil, tell your healthcare provider if you:</h2>
        <ul class="safety__list">
            <li class="safety__item">Have or have had heart problems such as a myocardial infarction (heart attack), heart failure, cardiac arrhythmias (irregular heartbeats), idiopathic hypertrophic subaortic stenosis, angina, chest pain, narrowing of the aortic valve, coronary artery disease, low blood pressure, or high blood pressure.</li>
            <li class="safety__item">Have had heart surgery</li>
            <li class="safety__item">Have a bleeding or clotting disorder or coagulopathy, including but not limited to polycythemia, sickle cell anemia or cancers affecting blood cells such as multiple myeloma or leukemia.</li>
            <li class="safety__item">Have liver problems, including but not limited to veno-occlusive disease (VOD).</li>
            <li class="safety__item">Have pulmonary hypertension.</li>
            <li class="safety__item">Have had a stroke or transient ischemic attack (TIA).</li>
            <li class="safety__item">Have a penile structural abnormality such as Peyronie's disease, surgeries, injuries, or conditions affecting the groin including the scrotum, testicles, and penis.</li>
            <li class="safety__item">Have ever had priapism (an erection that lasted for more than 4 hours).</li>
            <li class="safety__item">Have retinitis pigmentosa, a rare genetic eye disease, or Non-Arteritic Anterior Ischemic Optic Neuropathy (NAION).</li>
            <li class="safety__item">Have ever experienced sudden vision loss</li>
            <li class="safety__item">Have ever had stomach or intestinal ulcers, Gastroesophageal reflux disease (GERD), or a hiatal hernia.</li>
            <li class="safety__item">Have kidney problems or are having kidney dialysis.</li>
            <li class="safety__item">Have taken a nitrate medication in the last 48 hours.</li>
            <li class="safety__item">Are allergic to any drugs like these, any other drugs, foods, or other substances. Tell your doctor about the allergy and what signs you had, like rash, hives, itching, shortness of breath, wheezing, cough, swelling of face, lips, tongue, or throat, or any other signs.</li>
            <li class="safety__item">Have any other medical conditions.</li>
        </ul>

        <h2 class="safety__title">Tell your healthcare provider about all the medicines you take, including prescription and over-the-counter medicines, vitamins, and herbal supplements.</h2>

        <h2 class="safety__title">Sildenafil and Tadalafil may affect the way other medicines work, and other medicines may affect the way Sildenafil and Tadalafil work. This may result in serious side effects. Tell your healthcare provider if you take any of the following:</h2>
        <ul class="safety__list">
            <li class="safety__item">Medicines called nitrates or any other medicines that treat high blood pressure</li>
            <li class="safety__item">Medicines called guanylate cyclase stimulators such as Adempas (riociguat)</li>
            <li class="safety__item">Medicines called alpha-blockers such as Hytrin (terazosin HCl), Flomax (tamsulosin HCl, Cardura (doxazosin mesylate), Minipress (prazosin HCl, Uroxatral (alfuzosin HCl, Jalyn (dutasteride and tamsulosin HCl), or Rapaflo (silodosin). Alpha-blockers are sometimes prescribed for prostate problems or high blood pressure. In some patients, the use of Sildenafil with alpha-blockers can lead to a drop in blood pressure or to fainting.</li>
            <li class="safety__item">Medicines called HIV protease inhibitors, such as ritonavir (Norvir), indinavir sulfate (Crixivan), saquinavir (Fortovase or Invirase), or atazanavir sulfate (Reyataz).</li>
            <li class="safety__item">Oral antifungal medicines, such as ketoconazole (Nizoral) and itraconazole (Sporanox)</li>
            <li class="safety__item">Some types of antibiotics, such as clarithromycin (Biaxin), telithromycin (Ketek), or erythromycin</li>
            <li class="safety__item">Other PDE5 inhibitors, or other medicines or treatments for erectile dysfunction</li>
            <li class="safety__item">REVATIO or other PAH (pulmonary arterial hypertension) treatments containing Sildenafil</li>
        </ul>

        <h2 class="safety__title">Do not take Sildenafil and Tadalafil together or in conjunction with any other PDE5 inhibitors, including but not limited to: vardenafil (Levitra, Staxyn), or avanafil (Stendra).</h2>
        <p class="safety__paragraph">
            Sildenafil and Tadlafil do not protect against sexually transmitted diseases, including HIV.
        </p>

        <h2 class="safety__title">Common side effects of Sildenafil and Tadalafil include:</h2>
        <p class="safety__paragraph">
            Headache; flushing; upset stomach; heartburn; abnormal vision, such as changes in color vision (such as having a blue tinge) and blurred vision; stuffy or runny nose; back pain; muscle pain; nausea; dizziness; flushing; rash; sore throat; cough.
        </p>
        <p class="safety__paragraph">
            These are not all of the side effects that may occur. If you have questions about side effects, call your doctor. Call your doctor or get medical help if any of these side effects or any other side effects bother you or do not go away. You may also report side effects to the FDA at 1-800-FDA-1088 or <span class="safety__break-all">http://www.fda.gov/medwatch</span>
        </p>
        <p class="safety__paragraph">
This is not a list of all drugs or health problems that interact with this drug. Tell your doctor and pharmacist about all of your drugs (prescription or OTC, natural products, vitamins) and health problems. You must check to make sure that it is safe for you to take this drug with all of your drugs and health problems. Do not start, stop, or change the dose of any drug without checking with your doctor.
        </p>

        <h2 class="safety__title">How is Sildenafil or Tadalafil best taken?</h2>
        <p class="safety__paragraph">
            Read all information given to you including directions for use and safety information and following instructions from your doctor. Do not take Sildenafil and Tadalafil together. Do not take Sildenafil if you have taken Tadalafil in the last 72 hours. Do not take Tadalafil if you have taken Sildenafil in the last 24 hours.
        </p>
        <p class="safety__paragraph">
            Sildenafil: Unless otherwise told to you by your doctor, Sildenafil can be taken with or without food. It should be taken 30-60 minutes before engaging in sexual activity. Do not exceed 1 dose in a 24 hour period.
        </p>
        <p class="safety__paragraph">
            Tadalafil: Unless otherwise told to you by your doctor, Tadalafil can be taken with or without food. Tadalafil can be taken as needed or daily. When taken as needed, typical doses are 2.5, 5, 10, and 20 mg, and should be taken 30-60 minutes before engaging in sexual activity. When taken daily, typical doses are 2.5 and 5 mg. It can be taken any time of day but should be taken approximately the same time each day. Regardless of whether it is taken as needed or daily, do not exceed 1 dose in a 24 hour period.
        </p>

        <h2 class="safety__title">Proper storage and disposal</h2>
        <p class="safety__paragraph">
            Store at room temperature. Protect from light. Store in a dry place. Do not store in a bathroom. Keep all drugs in a safe place. Keep all drugs out of the reach of children and pets. Check with your pharmacist about how to throw out unused drugs. Do not flush unused medications or pour down a sink or drain.
        </p>

        <h2 class="safety__title">Keep out of reach of children</h2>
        <p class="safety__paragraph">
            By receiving this medication in sachet and/or strip packaging, you have agreed to receive medication from the pharmacy that is not child-resistant. You should store it securely where children cannot access it. If a child takes this medicine, call the poison control center at 1-800-222-1222 or get medical care for them right away.
        </p>

        <h2 class="safety__title">Accurate information disclaimer</h2>
        <p class="safety__paragraph">
            We have evaluated the specific health information you provided and are making our recommendations based on it. If you forgot to provide or incorrectly provided that information, we may misdiagnose or fail to diagnose conditions that you may have which could affect our recommendation for treatment.<br>
If you need to clarify or update any information about your health, you should message your Friday Plans doctor at <span class="safety__break-all">https://members.fridayplans.com/chat-with-provider</span>
        </p>

        <h2 class="safety__title">Accepting or declining our recommendation</h2>
        <p class="safety__paragraph">
            We are recommending this treatment for you because the potential benefits outweigh the risks in our estimation. You should evaluate this information as well as the manufacturer's pamphlet, any input from your in-person healthcare team, and any other relevant information to decide if this treatment plan is appropriate for you. You are free to not follow our recommendations although there may also be risks associated with no treatment.
        </p>

        <h2 class="safety__title">Overdose</h2>
        <p class="safety__paragraph">
            If you think there has been an overdose, call your poison control center at 1-800-222-1222 or get medical care right away. Be ready to tell or show what was taken, how much, and when it happened.
        </p>

        <h2 class="safety__title">Additional information</h2>
        <p class="safety__paragraph">
            If your symptoms or health problems do not get better or if they become worse, call your doctor. Do not share your drugs with others and do not take anyone else's drugs. Keep a list of all your drugs (prescription, natural products, vitamins, OTC) with you. Give this list to your doctor. Talk with your doctor before starting any new drug, including prescription or OTC, natural products, or vitamins. Some drugs may have another patient information leaflet.
        </p>
        <p class="safety__paragraph">
            If you have any questions about this drug, please talk with your doctor, nurse, pharmacist, or other health care provider.
        </p>
        
        <p class="safety__paragraph">
            <img class="safety__text-img" src="{{ "images/safety/text-d.png" | absURL }}" alt="">
            <img class="safety__text-img safety__text-img--mobile" src="{{ "images/safety/text-m.png" | absURL }}" alt="">
        </p>
        <p class="safety__paragraph" style="display:none;">
            Under certain circumstances, chemical degradation of drugs may occur. Please call Eagle Pharmacy at (833) 556-0172 with any questions.
        </p>
        <p class="safety__paragraph" style="display:none;">
If you have questions about the medication, call Eagle Pharmacy at (833) 556-0172 to chat with a pharmacist or log in to <span class="safety__break-all">https://members.fridayplans.com/chat-with-provider</span> to connect with your Friday Plans doctor.
        </p>
    </div>`

        safety.insertAdjacentHTML('beforeend', safetyContent);

        function toggleSafety() {
            const isActive = safety.classList.toggle('is-active');
            safetyBtnMore.textContent = isActive ? 'Close' : 'Read Now';
        }

        safetyBtnMore.addEventListener('click', toggleSafety);

        const btnToggleSafety = document.querySelector('.js-toggle-safety');
        if (!btnToggleSafety) return;

        btnToggleSafety.addEventListener('click', () => {
            safety.classList.add('is-active');
            safetyBtnMore.classList.add('is-active');
            safetyBtnMore.textContent = 'Close';
        });
    }

    // rellax
    function initRellax() {
        const rellaxEl = document.querySelector('.rellax');
        if(!rellaxEl) return

        new Rellax('.rellax');
    }

    // set current years
    function setCurrentYears () {
        const yearsElems = document.querySelectorAll('.js-years');
        if (!yearsElems.length) return;

        yearsElems.forEach(el => el.textContent = new Date().getFullYear());
    }

    // detect iphone
    function detectIphone() {
        if (/iPhone/i.test(navigator.userAgent)) {
            document.body.classList.add('is-phone');
        }
    }

    // add sticky cta
    function addStickyCTA() {
        if (window.innerWidth < 767) {
            setTimeout(function() {
                const stickyCta = document.createElement('div');
                stickyCta.classList.add('sticky-cta');
                stickyCta.innerHTML = `
                    <a href="https://intake.fridayplans.com/v3/qualification/1`+querystring+`" class="btn sticky-cta__btn">
                        <span class="btn__bg"></span>
                        <span class="btn__text">Get Started</span>
                    </a>
                `;
                const footer = document.querySelector('.footer');

                if (footer) {
                    footer.insertAdjacentElement('afterend', stickyCta);
                    observeHeaderVisibility(stickyCta);
                } else {
                    console.log('Footer element not found!');
                }
            }, 2000);
        }
    }

    // observe header visibility
    function observeHeaderVisibility(stickyCta) {
        const header = document.querySelector('.header');

        if (!header) {
            console.log('Header element not found!');
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) {
                stickyCta.classList.add('is-visible');
            } else {
                stickyCta.classList.remove('is-visible');
            }
        });

        observer.observe(header);
    }

    // init aos
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 600,
                easing: 'ease-out-cubic',
            });
        }
    }

    // init features more
    function initFeaturesMore() {
        const buttons = document.querySelectorAll('.features__more');
        if (!buttons.length) return;

        buttons.forEach((btn, index) => {
            const gradientId = `features-gradient-${index}`;
            const linearGradient = btn.querySelector('linearGradient');
            const gradientPath = btn.querySelector('path[stroke^="url"]');

            if (linearGradient) linearGradient.id = gradientId;
            if (gradientPath) gradientPath.setAttribute('stroke', `url(#${gradientId})`);
        });

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const block = btn.closest('.features__block');
                if (!block) return;

                block.classList.add('is-open');

                const hiddenItems = block.querySelectorAll('.features__hidden');
                hiddenItems.forEach(el => {
                    const display = el.tagName === 'SPAN' ? 'inline' : 'block';
                    el.style.display = display;
                    el.style.opacity = '0';
                    el.style.transition = 'opacity 0.4s ease';
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            el.style.opacity = '1';
                        });
                    });
                });

                btn.style.display = 'none';
            });
        });
    }

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            initMenu();
            highlightMenu();
            initNavbar();
            initSafety();
            initRellax();
            setCurrentYears();
            addStickyCTA();
        }, 2000);

        initReviews();
        initAOS();
        detectIphone();
        initFeaturesMore();
    });

})();
