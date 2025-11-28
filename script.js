const profiles = {
    allen: {
        name: "ALLEN MIGUE",
        bio: "SHY TYPE",
        address: "B-10 ROAD 2 DON JULIO GREGORIO ST. BAGBAG QC",
        phone: "09557489507",
        email: "JOHNALLENMIGUE@GMAIL.COM",
        work: "STUDIO PHOTOGRAPHER",
        hobby: "BASKETBALL, WATCHING, READING, GAMES",
        age: "19",
        sex: "MALE",
        civil: "SINGLE",
        height: "5'4\"",
        weight: "45KG",
        quote: "LIFE IS SHORT SO ALWAYS BE HAPPY."
    },

    russell: { name:"RUSSELL LAMSON", bio:"COMING SOON", address:"-", phone:"-", email:"-", work:"-", hobby:"-", age:"-", sex:"-", civil:"-", height:"-", weight:"-", quote:"-" },
    jhonrey: { name:"JHON REY BERNALES", bio:"COMING SOON", address:"-", phone:"-", email:"-", work:"-", hobby:"-", age:"-", sex:"-", civil:"-", height:"-", weight:"-", quote:"-" },
    robert: { name:"ROBERT CARIÑO", bio:"COMING SOON", address:"-", phone:"-", email:"-", work:"-", hobby:"-", age:"-", sex:"-", civil:"-", height:"-", weight:"-", quote:"-" },
    dhan: { name:"DHAN TAGASLING", bio:"COMING SOON", address:"-", phone:"-", email:"-", work:"-", hobby:"-", age:"-", sex:"-", civil:"-", height:"-", weight:"-", quote:"-" }
};

function showProfile(person, element) {
    const p = profiles[person];

    // remove active from all links
    document.querySelectorAll(".profile-link").forEach(link => {
        link.classList.remove("active");
    });

    // highlight the clicked one
    element.classList.add("active");

    document.getElementById("profileDisplay").innerHTML = `
        <h2>${p.name}</h2>
        <p><strong>BIO:</strong> ${p.bio}</p>
        <p><strong>ADDRESS:</strong> ${p.address}</p>
        <p><strong>PHONE:</strong> ${p.phone}</p>
        <p><strong>EMAIL:</strong> ${p.email}</p>
        <p><strong>WORK:</strong> ${p.work}</p>
        <p><strong>HOBBY:</strong> ${p.hobby}</p>

        <br><h3>PERSONAL DETAILS</h3>
        <p><strong>AGE:</strong> ${p.age}</p>
        <p><strong>SEX:</strong> ${p.sex}</p>
        <p><strong>CIVIL STATUS:</strong> ${p.civil}</p>
        <p><strong>HEIGHT:</strong> ${p.height}</p>
        <p><strong>WEIGHT:</strong> ${p.weight}</p>

        <br><p><strong>QUOTE:</strong> ${p.quote}</p>
    `;
}
