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
switchTab(currentTab);