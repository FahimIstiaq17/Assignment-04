let currentTab = "all";
const tabActive = ["bg-[#3B82F6]", "text-white"];
const tabInactive = ["bg-white", "text-[#64748B]"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
// console.log(allContainer, interviewContainer, rejectedContainer);


function switchTab(tab) {
    // console.log(Tab);
    const Tabs = ["all" , "interview", "rejected"];
    for (const ttab of Tabs) {
        const tabName = document.getElementById("tab-"+ttab);
        if(ttab === tab) {
            tabName.classList.add(...tabActive);
            tabName.classList.remove(...tabInactive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }

    const Sections = [allContainer, interviewContainer, rejectedContainer];
    for (const section of Sections) {
        section.classList.add("hidden");
    }

    if (tab === "all") {
        allContainer.classList.remove("hidden");
    }
    else if(tab === "interview") {
        interviewContainer.classList.remove("hidden");
    }
    else {
        rejectedContainer.classList.remove("hidden");
    }
}

// Statistics Update 
const total = document.getElementById("statistic-total");
const interview = document.getElementById("statistic-interview");
const rejected = document.getElementById("statistic-rejected");

switchTab(currentTab);

// job cards
document.getElementById("job-container").addEventListener("click", function (event) {
    const clickedElement = event.target;
    const Card = clickedElement.closest(".Card");
    const Status = Card.querySelector(".Status");
    const Parent = Card.parentNode;
    
    if (clickedElement.classList.contains("interview")) {
        Status.innerText ="Interview";
        interviewContainer.appendChild(Card);
        updateStatistics();
    }
    if (clickedElement.classList.contains("rejected")) {
        Status.innerText ="Rejected";
        rejectedContainer.appendChild(Card);
        updateStatistics();
    }
    if (clickedElement.classList.contains("delete")) {
        Parent.removeChild(Card);
        updateStatistics();
    }
});

function updateStatistics() {
   total.innerText = allContainer.children.length;
   interview.innerText = interviewContainer.children.length;
   rejected.innerText = rejectedContainer.children.length;
}
updateStatistics();