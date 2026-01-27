// $(document).ready(function () {
//     function sendData() {
//         // Getting input values using jQuery
//         const formData = {
//             title: $("#title").val(),
//             gender: $("input[name='gender']:checked").val() || "",
//             firstName: $("#first_name").val(),
//             middleName: $("#middle_name").val(),
//             lastName: $("#last_name").val(),
//             dob: $("#dob").val(),
//             nationality: $("#nationality").val(),
//             stateOfOrigin: $("#state_of_origin").val(),
//             lga: $("#lga").val(),
//             maritalStatus: $("#marital_status").val(),
//             mothersMaidenName: $("#mothers_maiden_name").val(),
//             residentialAddress: $("#residential_address").val(),
//             contactAddress: $("#contact_address").val(),
//             city: $("#city").val(),
//             country: $("#country").val(),
//             phoneNumber: $("#phone_number").val(),
//             alternativePhoneNumber: $("#alternative_phone_number").val(),
//             email: $("#email").val()
//         };

//         // AJAX request
//         $.ajax({
//             url: "https://prod-54.westeurope.logic.azure.com:443/workflows/6ce1984b6f7c44f0b2cc410d2fa416b0/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=I9WyvIoBP3fcFxfI-hDxiKFPNXYj-iEXKy4o_2-TW2w", // Change this to your API URL
//             type: "POST",
//             data: JSON.stringify(formData),
//             contentType: "application/json",
//             success: function (response) {
//                 console.log("Data submitted successfully", response);
//             },
//             error: function (xhr, status, error) {
//                 console.error("Error submitting data", error);
//             }
//         });
//     }

//     // Call sendData() when form is submitted
//     $("#myForm").submit(function (event) {
//         event.preventDefault(); // Prevent default form submission
//         sendData();
//     });
// });

//$(document).ready(function () {

   
        // $("#dl_doc").change(function() {
        //     let file = this.files[0]; // Get the selected file
        //     if (file) {
        //         console.log(file);
        //         // console.log("File size:", file.size, "bytes");
        //         // console.log("File type:", file.type);
        //     } else {
        //         console.log("No file selected.");
        //     }
        // });



//     $(".submitBtn, .submit2").on("click", function (e) {
//         e.preventDefault(); // Prevent default form submission

//         // Create a FormData object for file and text inputs
//         var formData = new FormData();

//         // Collect all text inputs
//         $("input[type='text'], input[type='date'], input[type='number']").each(function () {
//             formData.append($(this).attr("id"), $(this).val());
//             //alert(formData)
//         });
        
//         // Collect textarea values
//         $("textarea").each(function () {
//             formData.append($(this).attr("id"), $(this).val());
           
//         });

//         // Collect selected radio button values
//         $("input[type='radio']:checked").each(function () {
//             formData.append($(this).attr("name"), $(this).val());
//             // alert(formData)
//         });

//         // Collect selected option from dropdown
//         $("select").each(function () {
//             formData.append($(this).attr("id"), $(this).val());
//             // alert(formData)
//         });
        
//         // Collect file inputs
//         $("input[type='file']").each(function () {
//             var file = $(this)[0].files[0]; // Get the file
//             if (file) {
//                 formData.append($(this).attr("id"), file);
//             }
//         });
//         console.table([...formData.entries()])
//         // Check confirmation checkbox
//         var confirmation = $("#flexCheckDefault").is(":checked") ? "Yes" : "No";
//         formData.append("confirmation", confirmation);

//         //Send data using AJAX
//         $.ajax({
//             url: "process-form.php", // Replace with your server-side script
//             type: "POST",
//             data: formData,
//             contentType: Application/json,
//             processData: false,
//             success: function (response) {
//                 alert("Form submitted successfully!");
//                 console.log(response);
//                 console.log(formData);
//             },
//             error: function (xhr, status, error) {
//                 alert("An error occurred: " + error);
//                 console.log(xhr.responseText);
//                 console.log(formData);
//             }
//         });
//     });
// });

// $(document).ready(function () {
//         $(".submitBtn, .submit2").on("click", function (e) {
//             e.preventDefault(); // Prevent default form submission
//             function sendData() {
//                         // Getting input values using jQuery
//                         const formData = {
//                             title: $("#title").val(),
//                             gender: $("input[name='gender']:checked").val() || "",
//                             firstName: $("#first_name").val(),
//                             middleName: $("#middle_name").val(),
//                             lastName: $("#last_name").val(),
//                             dob: $("#dob").val(),
//                             nationality: $("#nationality").val(),
//                             stateOfOrigin: $("#state_of_origin").val(),
//                             lga: $("#lga").val(),
//                             maritalStatus: $("#marital_status").val(),
//                             mothersMaidenName: $("#mothers_maiden_name").val(),
//                             residentialAddress: $("#residential_address").val(),
//                             contactAddress: $("#contact_address").val(),
//                             city: $("#city").val(),
//                             country: $("#country").val(),
//                             phoneNumber: $("#phone_number").val(),
//                             alternativePhoneNumber: $("#alternative_phone_number").val(),
//                             email: $("#email").val()
//                         };
//                         console.log(formData);
//                         // AJAX request
//                     }
//                     sendData();
//                 })});
                
// 

// $(document).ready(function () {
//     $(".ClassMixOfIdentification input[type='radio']").on("change", function () {
//         let selectedIndex = $(".ClassMixOfIdentification input[type='radio']").index(this) + 1;
//         let selectedValue = $(this).val();

//         if (selectedIndex !== 4) {
//             // Set first input to selected radio value and disable it
//             $("#doc_nam").val(selectedValue).prop("disabled", true);

//             // Keep other inputs editable
//             $("#doc_num, #did, #ded").prop("disabled", false);
//         } else {
//             // If the fourth radio button is selected, enable all inputs
//             $("#doc_nam, #doc_num, #did, #ded").val("").prop("disabled", false);
//         }
//     });

//     $(".submitBtn, .submit2").on("click", function (e) {
//         e.preventDefault(); // Prevent default form submission
//         let errorDiv = $(".errorDiv"); // Select error div
//         errorDiv.empty(); // Clear previous errors

//         let formData = new FormData();
//         let isValid = true; // Flag for validation

//         // Helper function for validation
//         function validateInput(selector, type = "text") {
//             $(selector).not(".no-validate").each(function () {
//                 let $this = $(this);
//                 let value = type === "file" ? $this[0].files[0] : $this.val().trim();
//                 let fieldLabel = $this.attr("aria-label") || "this field"+$this.attr("placeholder");

//                 if (!value) {
//                     errorDiv.append(`<p class='col-sm-6 alert alert-danger' role='alert'>Please fill out: ${fieldLabel}</p>`);
//                     isValid = false;
//                 } else {
//                     formData.append(fieldLabel, value);
//                 }
//             });
//         }

//         // Validate inputs
//         validateInput("input[type='text'], input[type='date'], input[type='number']");
//         validateInput("input[type='radio']:checked");
//         validateInput("textarea");
//         validateInput("input[type='file']", "file");

//         // if (!isValid) {
//         //     console.warn("Form validation failed!");
//         //     return;
//         // }

//         console.table([...formData.entries()]); // Debugging

//         // Store form data for CSV download
//         window.formDataForCSV = formData;
//     });

//     $("#downloadCsv").click(function () {
//         if (!window.formDataForCSV) {
//             alert("Please submit the form first!");
//             return;
//         }

//         let formData = window.formDataForCSV;
//         let csvContent;

//         let headers = [];
//         let values = [];

//         for (let [key, value] of formData.entries()) {
//             headers.push(key);
//             values.push(value);
//         }

//         csvContent += headers.join(",") + "\n" + values.join(",") + "\n";

//         // Create a Blob and download link
//         let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//         let link = document.createElement("a");
//         let url = URL.createObjectURL(blob);

//         link.setAttribute("href", url);
//         link.setAttribute("download", "form_data.csv");
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     });
// });


$(document).ready(function () {
    const flow_url = "https://default7ad43cd200e44603887099fed75d00.df.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/e031fe75859f4bc4aa6eaa1864294677/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=uQ6JyNM3AyNjayilWMH7DvMkreQnRvvbZjCNMVQ-DHM"

    function updateSubmitButtonState() {
            const caCheckbox = document.getElementById("caCheckbox");
            const submitButton = document.getElementById("submitbtn");

            const isHidden = caCheckbox.classList.contains("d-none");

            submitButton.disabled = isHidden;
            }

            // Initial state on page load
            updateSubmitButtonState();

            // When "Save changes" is clicked in the modal
            document.getElementById("saveCA").addEventListener("click", function () {
            const caCheckbox = document.getElementById("caCheckbox");
            const caWrapper = document.getElementById("caWrapper");
            const caLink = document.getElementById("caLink");

            // Make checkbox visible
            caCheckbox.classList.remove("d-none");

            // Optionally auto-check it
            caCheckbox.checked = true;
            caCheckbox.disabled = true
            caWrapper.disabled = true
            caLink.style.pointerEvents = "none";
            caLink.style.cursor = "not-allowed";
            

            // Update submit button state
            updateSubmitButtonState();
        });


    document.addEventListener("contextmenu", (event) => event.preventDefault());
        document.addEventListener("keydown", function (event) {
            if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
                event.preventDefault();
                // alert("View Source is disabled!");
            }
        });
        document.addEventListener("keydown", function (event) {
            if (event.ctrlKey && (event.key === "s" || event.key === "S")) {   
                event.preventDefault();
                // alert("Save is disabled!");
            }
        });
        document.addEventListener("keydown", function (event) {
            if (event.ctrlKey && event.shiftKey && (event.key === "i" || event.key === "I")) {
                event.preventDefault();
                // alert("Inspect Element is disabled!");
            }
        });


        $(" #doc_nam,#doc_num, #did, #ded").val("").prop("disabled", true);
                $(".ClassMixOfIdentification input[type='radio']").on("change", function () { 
                let selectedValue = $(this).val();

                if (selectedValue !== "Others") { // Assuming "Other" is the 4th option
                    $("#doc_nam").val(selectedValue).prop("disabled", true);
                    $("#doc_num, #did, #ded").prop("disabled", false);
                } else {
                    $("#doc_nam, #doc_num, #did, #ded").val("").prop("disabled", false);
                }
        });

    $('input[name="gender"]').on("change", function () {
        console.log("Updated Selected Gender:", this.value);
    });
    $('input[name="moi"]').on("change", function () {
        console.log("Updated Selected Means of Identification:", this.value);
    });

    $('input[name="es"]').on("change", function () {
        console.log("Updated Selected Employment Status:", this.value);
    });

    function validateInput(selector, regex = null) {
        let isValid = true;
        $(selector).each(function () {
            let $this = $(this);
            let value = $this.val().trim();
            let fieldLabel = $this.attr("aria-label") || $this.attr("placeholder") || "this field";

            if (!value) {
                showError(`Please fill out: ${fieldLabel}`);
                isValid = false;
            } else if (regex && !regex.test(value)) {
                showError(`Invalid input for: ${fieldLabel}`);
                isValid = false;
            }
        });
        return isValid;
    }

    function showError(message) {
        $(".errorDiv").append(`<p class='col-sm-6 alert alert-danger' role='alert'>${message}</p>`);
    }

    async function handleFormSubmission(event) {
        event.preventDefault();
        $(".errorDiv").empty();

        

        let isValid = true;
        isValid = validateInput("input[type='text'], input[type='email'], input[type='number'], select") && isValid;
        isValid = validateInput("input[type='email']", /^[^\s@]+@[^\s@]+\.[^\s@]+$/) && isValid;
        isValid = validateInput("input[type='number']", /^\d+$/) && isValid;

       if (!isValid) return;
        $(".loader").show();// Show loader
        const form = document.getElementById('myForm');
        const formData = new FormData(form);
        $("select").each(function () {
        formData.append($(this).attr("name"), $(this).val());
    });
        $("#doc_nam").each(function () {
        formData.append($(this).attr("name"), $(this).val());
    });

        async function readFile(file) {
            return new Promise((resolve) => {
                if (!file) {
                    resolve(null);
                    return;
                }
                const reader = new FileReader();
                reader.onload = (event) => resolve(event.target.result);
                reader.readAsDataURL(file);
            });
        }

        const copy_id = await readFile(formData.get("copy_id"));
        const busines_utility_bill = await readFile(formData.get("busines_utility_bill"));
        const cac_doc = await readFile(formData.get("cac_doc"));
        const passport = await readFile(formData.get("passport"));
        const biz_img = await readFile(formData.get("biz_img"));

        const formattedData = Object.fromEntries(formData.entries());
        formattedData.copy_id = { 
            name: formData.get("copy_id")?.name || "",
            type: formData.get("copy_id")?.type || "", 
            data: copy_id };
        formattedData.busines_utility_bill = { 
            name: formData.get("busines_utility_bill")?.name || "",
            type: formData.get("busines_utility_bill")?.type || "", 
            data: busines_utility_bill };
        formattedData.cac_doc = { 
            name: formData.get("cac_doc")?.name || "",
            type: formData.get("cac_doc")?.type || "", 
            data: cac_doc };
        formattedData.passport = { 
            name: formData.get("passport")?.name || "",
            type: formData.get("passport")?.type || "", 
            data: passport };
        formattedData.biz_img = { 
            name: formData.get("biz_img")?.name || "",
            type: formData.get("biz_img")?.type || "", 
            data: biz_img };

        console.log(formattedData);

    fetch(flow_url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formattedData)
}).then(response => response.text()) // Convert response to text
  .then(data => {
      const root = document.getElementById('root');
      root.innerHTML = `<h1>Thank you for your application!</h1><p>${data}</p>`;
      
      // Redirect to success page after 2 seconds
      setTimeout(() => {
          window.location.href = "https://sovereignfinanceltd.com"; // Change to your success URL
      }, 2000);
      $(".loader").hide();// hide loader
  })
  .catch(error => {
      console.error("Error:", error);
      const root = document.getElementById('root');
      root.innerHTML = `<h1>Submission Failed</h1><p>${error}</p>`;
      
      // Redirect back to the form after 3 seconds
      setTimeout(() => {
          window.location.href = "https://account-opening-dgej.onrender.com/"; // Change to your form URL
      }, 3000);
        $(".loader").hide();// hide loader
  });
    }

    $('#myForm').on('submit', handleFormSubmission);
   
});
// $(document).ready(function () {

//     function updateSubmitButtonState() {
//             const caCheckbox = document.getElementById("caCheckbox");
//             const submitButton = document.getElementById("submitbtn");

//             const isHidden = caCheckbox.classList.contains("d-none");

//             submitButton.disabled = isHidden;
//             }

//             // Initial state on page load
//             updateSubmitButtonState();

//             // When "Save changes" is clicked in the modal
//             document.getElementById("saveCA").addEventListener("click", function () {
//             const caCheckbox = document.getElementById("caCheckbox");
//             const caWrapper = document.getElementById("caWrapper");
//             const caLink = document.getElementById("caLink");

//             // Make checkbox visible
//             caCheckbox.classList.remove("d-none");

//             // Optionally auto-check it
//             caCheckbox.checked = true;
//             caCheckbox.disabled = true
//             caWrapper.disabled = true
//             caLink.style.pointerEvents = "none";
//             caLink.style.cursor = "not-allowed";
            

//             // Update submit button state
//             updateSubmitButtonState();
//         });


//     $(".ClassMixOfIdentification input[type='radio']").on("change", function () {
//                 let selectedIndex = $(".ClassMixOfIdentification input[type='radio']").index(this) + 1;
//                 let selectedValue = $(this).val();
        
//                 if (selectedIndex !== 4) {
//                     // Set first input to selected radio value and disable it
//                     $("#doc_nam").val(selectedValue).prop("disabled", true);
        
//                     // Keep other inputs editable
//                     $("#doc_num, #did, #ded").prop("disabled", false);
//                 } else {
//                     // If the fourth radio button is selected, enable all inputs
//                     $("#doc_nam, #doc_num, #did, #ded").val("").prop("disabled", false);
//                 }
//             });


//     let formDataForCSV = null; // Store form data for CSV

//     $(".submitBtn, .submit2").on("click", function (e) {
//         e.preventDefault();
//         let errorDiv = $(".errorDiv");
//         errorDiv.empty();
//         let formData = new FormData();
//         let isValid = true;

//         function validateInput(selector, type = "text") {
//             $(selector).not(".no-validate").each(function () {
//                 let $this = $(this);
//                 let value = type === "file" ? $this[0].files[0] : $this.val().trim();
//                 let fieldLabel = $this.attr("aria-label") || "this field";

//                 if (!value) {
//                     errorDiv.append(`<p class='col-sm-6 alert alert-danger' role='alert'>Please fill out: ${fieldLabel}</p>`);
//                     isValid = false;
//                 } else {
//                     formData.append(fieldLabel, value);
//                 }
//             });
//         }

//         // Validate inputs
//         validateInput("input[type='text'], input[type='date'], input[type='number']");
//         validateInput("input[type='radio']:checked");
//         validateInput("textarea");
//         validateInput("input[type='file']", "file");

//         if (!isValid) {
//             console.warn("Form validation failed!");
//             return;
//         }

//         formDataForCSV = formData;
//     });

//     $("#sendCsvEmail").click(function () {
//         if (!formDataForCSV) {
//             alert("Please submit the form first!");
//             return;
//         }

//         let csvContent = "";
//         let headers = [];
//         let values = [];

//         for (let [key, value] of formDataForCSV.entries()) {
//             headers.push(key);
//             values.push(value);
//         }

//         csvContent += headers.join(",") + "\n" + values.join(",") + "\n";

//         let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

//         let formData = new FormData();
//         formData.append("csv_file", blob, "form_data.csv");
//         formData.append("email", "recipient@example.com"); // Change recipient email

//         $.ajax({
//             url: "send_email.php", // Backend script to handle email
//             type: "POST",
//             data: formData,
//             contentType: false,
//             processData: false,
//             success: function (response) {
//                 alert("CSV sent successfully!");
//                 console.log(response);
//             },
//             error: function (xhr, status, error) {
//                 alert("An error occurred: " + error);
//                 console.error(xhr.responseText);
//             }
//         });
//     });
// });

