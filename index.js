const heading = document.querySelector(".cover-heading");
const paragraph = document.querySelector(".cover-paragraph");
const btn = document.getElementById("checkbox");


const changeLanguage = () => {
    console.log(btn.checked);
    if (btn.checked === true) {
        heading.textContent = "Learn Algorithm the easy way";
        paragraph.textContent = `AlgoRythm is the best platform to help you improve your skills, expand your knowledge and prepare for technical interviews.`
    } else if (btn.checked === false) {
        heading.textContent = "সহজ উপায় অ্যালগরিদম শিখুন";
        paragraph.textContent = `আপনার দক্ষতা বাড়াতে, আপনার জ্ঞানকে প্রসারিত করতে এবং প্রযুক্তিগত সাক্ষাত্কারের জন্য প্রস্তুত হতে
        সহায়তা করার জন্য আলগোআরথিম (AlgoRythm) হ'ল সেরা প্ল্যাটফর্ম`
    }

}

console.log(btn)
btn.addEventListener("click", changeLanguage);