let currentTab = "all";
const tabActive = ["bg-[#3B82F6]", "text-white"];
const tabInactive = ["bg-white", "text-[#64748B]"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const noJobs = document.getElementById("no-jobs");

// Switch Tab
function switchTab(tab) {
  const Tabs = ["all", "interview", "rejected"];
  currentTab = tab;
  for (const ttab of Tabs) {
    const tabName = document.getElementById("tab-" + ttab);
    if (ttab === tab) {
      tabName.classList.add(...tabActive);
      tabName.classList.remove(...tabInactive);
    } else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
  }

  const Sections = [allContainer, interviewContainer, rejectedContainer];
  for (const section of Sections) {
    section.classList.add("hidden");
  }

  noJobs.classList.add("hidden");

  if (tab === "all") {
    allContainer.classList.remove("hidden");
    if (allContainer.children.length < 1) {
      noJobs.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
    if (interviewContainer.children.length < 1) {
      noJobs.classList.remove("hidden");
    }
  } else {
    rejectedContainer.classList.remove("hidden");
    if (rejectedContainer.children.length < 1) {
      noJobs.classList.remove("hidden");
    }
  }
  updateStatistics();
}

// Statistics Update
const total = document.getElementById("statistic-total");
const interview = document.getElementById("statistic-interview");
const rejected = document.getElementById("statistic-rejected");
const available = document.getElementById("available-job");

switchTab(currentTab);

// job cards
document
  .getElementById("job-container")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const Card = clickedElement.closest(".Card");
    const Status = Card.querySelector(".Status");
    const Parent = Card.parentNode;

    if (clickedElement.classList.contains("interview")) {
      Status.innerText = "Interview";
      interviewContainer.appendChild(Card);
      updateStatistics();
    }
    if (clickedElement.classList.contains("rejected")) {
      Status.innerText = "Rejected";
      rejectedContainer.appendChild(Card);
      updateStatistics();
    }
    if (clickedElement.classList.contains("delete")) {
      Parent.removeChild(Card);
      updateStatistics();
    }
  });

function updateStatistics() {

  const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length,
  };
  total.innerText = counts.all;
  interview.innerText = counts.interview;
  rejected.innerText = counts.rejected;
  available.innerText = counts[currentTab];
}
updateStatistics();
