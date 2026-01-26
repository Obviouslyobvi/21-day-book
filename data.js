// Book Writing 21-Day Method - Complete Data Structure

// Daily Affirmations - One for each day
const dailyAffirmations = [
    "I clearly define my book's purpose and connect deeply with my ideal reader.", // Day 1
    "I craft compelling reasons that make my book essential and valuable to readers.", // Day 2
    "I write with confidence, allowing my knowledge to flow naturally onto the page.", // Day 3
    "My ideas transform into powerful chapters that educate and inspire.", // Day 4
    "I trust my outline and embrace the joy of filling in the details.", // Day 5
    "Every paragraph I write brings me closer to my completed manuscript.", // Day 6
    "I write authentically, using my unique voice to connect with readers.", // Day 7
    "I am making significant progress, and my book is taking shape beautifully.", // Day 8
    "My creativity flows freely as I express my expertise through words.", // Day 9
    "I write with clarity and purpose, knowing my message matters.", // Day 10
    "I am halfway to my goal, and I continue with renewed enthusiasm.", // Day 11
    "Each chapter reflects my dedication and commitment to excellence.", // Day 12
    "I complete my writing phase with pride in my accomplishments.", // Day 13
    "I research with integrity, enriching my manuscript with valuable insights.", // Day 14
    "I organize my work thoughtfully, creating a cohesive and compelling narrative.", // Day 15
    "I read my work with fresh eyes, seeing both strengths and opportunities for growth.", // Day 16
    "I refine my manuscript with care, honoring my purpose and my readers.", // Day 17
    "I polish my work patiently, knowing that excellence requires attention to detail.", // Day 18
    "I approach revision with confidence, trusting my instincts and expertise.", // Day 19
    "I finalize my manuscript with satisfaction, knowing I've given my best effort.", // Day 20
    "I celebrate completing my manuscript! I am a writer. I am an author. This is my achievement." // Day 21
];

const timelineData = {
    phases: [
        {
            name: "Foundation",
            description: "Laying the groundwork for your book",
            days: [
                {
                    day: 1,
                    title: "Foundation",
                    focus: "Title, Purpose, Audience, Benefits, Summary",
                    tasks: [
                        {
                            title: "Write your book title",
                            description: "Based on your previous decisions and research",
                            duration: "10 minutes"
                        },
                        {
                            title: "Write your book's purpose in one sentence",
                            description: "This will guide all your writing decisions",
                            duration: "10 minutes"
                        },
                        {
                            title: "Describe your target audience",
                            description: "Write 1-2 paragraphs describing who needs this book. Be as detailed as possible - age range, gender, location, demographics, education, marital status, household size, and their specific needs.",
                            duration: "10 minutes"
                        },
                        {
                            title: "List everything a person needs to know",
                            description: "Use single words or phrases only. Don't worry about order. Just write - no overthinking!",
                            duration: "10 minutes"
                        },
                        {
                            title: "Number and organize your list",
                            description: "Arrange in logical order. You've now created your table of contents! Each topic = a chapter title.",
                            duration: "10 minutes"
                        }
                    ],
                    insight: "The whole process takes about 30 minutes, but even if it takes an hour, you've outlined your entire book in one day!"
                },
                {
                    day: 2,
                    title: "Elaborate on Topics",
                    focus: "Chapter Development",
                    tasks: [
                        {
                            title: "Transcribe notes",
                            description: "Transfer notes from your spiral notebook/recorder into your writing space"
                        },
                        {
                            title: "List 8-12 reasons why your audience needs your book",
                            description: "What benefits can they gain? What can they learn? Why should they learn it?"
                        },
                        {
                            title: "Write a book summary",
                            description: "Use the reasons above as guide. This becomes your introduction."
                        },
                        {
                            title: "Select one chapter that interests you most",
                            description: "Choose the chapter you're most excited about right now"
                        },
                        {
                            title: "Write introductory paragraph for that chapter",
                            description: "Set the context for what the chapter will cover"
                        },
                        {
                            title: "Fill in each subject heading (subtopic)",
                            description: "Explain with complete sentences. Organize in paragraphs (1-10 paragraphs per subtopic)."
                        }
                    ],
                    insight: "After Day 1, writing becomes 'fill in the blanks' because you have a complete outline!"
                }
            ]
        },
        {
            name: "Writing Phase",
            description: "Creating your rough draft chapters",
            days: generateWritingDays(3, 13) // Days 3-13
        },
        {
            name: "Research & Polish",
            description: "Refining and fact-checking your manuscript",
            days: [
                {
                    day: 14,
                    title: "Research and Fact-Checking",
                    focus: "Library research trip",
                    tasks: [
                        {
                            title: "Prepare for research",
                            description: "Carry your spiral notebook. Take a list of every subtopic marked with star (*) or question mark (?)"
                        },
                        {
                            title: "Library research",
                            description: "Thoroughly research all marked information. This is your only research day - use time wisely!"
                        },
                        {
                            title: "Incorporate useful information",
                            description: "Add researched information into subtopics. Delete subtopics that no longer seem useful."
                        },
                        {
                            title: "Credit sources properly",
                            description: "Do NOT violate copyrights. Do NOT paraphrase - understand information, then explain in YOUR OWN WORDS. Credit proper sources."
                        }
                    ],
                    insight: "This helps readers respect you as diligent researcher and helps publisher identify if permissions needed."
                },
                {
                    day: 15,
                    title: "The First Draft",
                    focus: "Organization and first complete version",
                    tasks: [
                        {
                            title: "Continue corrections from library visit",
                            description: "Implement all research findings"
                        },
                        {
                            title: "Organize chapters",
                            description: "Get out Handwritten Topic Sheets. Decide if original order needs changing. Move topics accordingly."
                        },
                        {
                            title: "Write updated Table of Contents",
                            description: "Place after first chapter"
                        },
                        {
                            title: "Write conclusion/summary",
                            description: "Summarize what you've told reader and why. Point out how information benefits reader. Place after last chapter."
                        },
                        {
                            title: "Print manuscript on light pink paper",
                            description: "This helps you recognize it later"
                        },
                        {
                            title: "Separate chapters",
                            description: "Use paper clips or folders"
                        }
                    ]
                },
                {
                    day: 16,
                    title: "The Read-Through",
                    focus: "Fresh perspective reading",
                    tasks: [
                        {
                            title: "Read pink manuscript straight through",
                            description: "Don't stop to make corrections. Note corrections as you go. Write directly on pink pages."
                        },
                        {
                            title: "Make notes in margins",
                            description: "Record new ideas or changes"
                        },
                        {
                            title: "Chapter reflection",
                            description: "Stop at end of each chapter and ask: Have I explained this thoroughly? Clearly? Simply? What was the purpose? Have I fulfilled that purpose?"
                        },
                        {
                            title: "Selective re-reading",
                            description: "Reread parts that interest you, parts that bother you (work on them), and parts you feel especially proud of"
                        }
                    ]
                }
            ]
        },
        {
            name: "Clean Up",
            description: "Polish and refinement",
            days: generateCleanUpDays(17, 20) // Days 17-20
        },
        {
            name: "Finalization",
            description: "Final version creation",
            days: [
                {
                    day: 21,
                    title: "The Last Day - Finalization",
                    focus: "Final version creation",
                    tasks: [
                        {
                            title: "Input all changes/corrections",
                            description: "Transfer all changes from pink copy into computer"
                        },
                        {
                            title: "Print finalized manuscript on yellow paper",
                            description: "Using a different color helps you see this as a new version"
                        },
                        {
                            title: "Read yellow version",
                            description: "Is it clear? Make corrections on paper as you go."
                        },
                        {
                            title: "Input all changes from yellow version",
                            description: "Make final revisions and corrections in your digital manuscript"
                        },
                        {
                            title: "Run spell-check again",
                            description: "Final spelling and grammar check"
                        },
                        {
                            title: "Celebrate!",
                            description: "Congratulations! You've completed your manuscript in 21 days!"
                        }
                    ],
                    insight: "You've completed your manuscript in 21 days! Now take a minimum 3-day break to let it sleep on the backburner of your creative mind."
                }
            ]
        }
    ]
};

// Helper function to generate writing days (Days 3-13)
function generateWritingDays(start, end) {
    const days = [];
    for (let i = start; i <= end; i++) {
        days.push({
            day: i,
            title: `Write Chapter ${i - 2}`,
            focus: "Completing rough draft chapters",
            tasks: [
                {
                    title: "Transcribe notes",
                    description: "Transfer notes from spiral notebook into appropriate chapters"
                },
                {
                    title: "Say daily affirmation",
                    description: "Spend one minute on your daily affirmation"
                },
                {
                    title: "Format today's work",
                    description: "Put temporary book title at top in ALL CAPS BOLD. Put working chapter title in Upper and Lower Case Bold. List all subtopics in order. Double space between items."
                },
                {
                    title: "Write the chapter",
                    description: "Start with topic that interests you most. Write sentences and paragraphs explaining each subtopic. Complete all subtopics in the chapter."
                }
            ],
            insight: "It's a game! Write introductory paragraph → Go to first subject heading → Explain in paragraphs → Repeat for all subjects in chapter."
        });
    }
    return days;
}

// Helper function to generate clean up days (Days 17-20)
function generateCleanUpDays(start, end) {
    const days = [];
    for (let i = start; i <= end; i++) {
        days.push({
            day: i,
            title: `Clean Up Day ${i - 16}`,
            focus: "Polish and refinement",
            tasks: [
                {
                    title: "Transcribe notes",
                    description: "Transfer any new notes from your notebook"
                },
                {
                    title: "Say daily affirmation",
                    description: "Spend one minute on your daily affirmation"
                },
                {
                    title: "Make revisions on pink copy",
                    description: "Is there anything you can say more clearly?"
                },
                {
                    title: "Review Purpose Statement",
                    description: "Does your work fulfill the purpose?"
                },
                {
                    title: "Review 8-12 reasons",
                    description: "Does manuscript answer why readers should buy your book?"
                },
                {
                    title: "Insert introduction",
                    description: "Add introduction (written on Day 1) after Table of Contents. Rewrite if necessary."
                },
                {
                    title: "Insert conclusion/summary",
                    description: "Add conclusion (from Day 15). Rewrite if necessary."
                },
                {
                    title: "Run spell-check",
                    description: "Check for spelling and grammar errors"
                }
            ]
        });
    }
    return days;
}

// Flatten all days for easy access
const allDays = timelineData.phases.reduce((acc, phase) => {
    return acc.concat(phase.days);
}, []);

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { timelineData, allDays };
}
