let mainMenu = document.querySelector('#menu');
let clickMenu = document.querySelector('#click-menu');
let home = document.querySelector('.home');
let clickContact = document.querySelector('#click-contact');
let contact = document.querySelector('.contact');
let submit = document.querySelector('#submit');

let btns = document.querySelectorAll('.btn');

if(clickMenu) {
    clickMenu.addEventListener('click',function(e){
        e.preventDefault();
        mainMenu.classList.remove('hidden');
        home.classList.add('hidden');
    })
}

if(clickContact) {
    clickContact.addEventListener('click',function(e){
        e.preventDefault();
        contact.classList.remove('hidden');
        mainMenu.classList.add('hidden');
    })
}
if(submit) {
    submit.addEventListener('click',function(e){
        e.preventDefault();
        home.classList.add('hidden');
        
        mainMenu.classList.remove('hidden');
    })
}

if (btns) {
    btns.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            Swal.fire({
                title: "Do you want to order this pizza?",
                icon: "question",
                iconHtml: "؟",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                showCancelButton: true,
                showCloseButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Price Of Order is : 10$",
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                        showCancelButton: true,
                        showCloseButton: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Your information:",
                                html: `
                                    <input type="text" id="phone" class="swal2-input" placeholder="Enter your phone number">
                                `,
                                confirmButtonText: "Submit",
                                focusConfirm: false,
                                preConfirm: () => {
                                    const phone = document.getElementById('phone').value;
                                    if (!phone) {
                                        Swal.showValidationMessage("Please enter your phone number!");
                                    }
                                    return phone;
                                }
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Your order has been sent",
                                        text: `📞 Phone: ${result.value}`,
                                        confirmButtonText: "Ok"
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });
    });
}
