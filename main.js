<script>

        function fun_submit() {
            const formData = {};
            const fullName = document.querySelector('input[name=fullname]').value;
            const country = document.querySelector('select[name=country] option:checked').value;
            const states = document.querySelector('select[name=States] option:checked').value;
            const hobbies = document.querySelectorAll('select[name=Hobbies] option:checked');
            const gender = document.querySelector('input[name=gender]:checked').value;
            const marketing = document.querySelectorAll('input[name=Marketing]:checked');
            const subject = document.querySelector('textarea[name=subject]').value;
            const hidden = document.querySelector('input[name=form-filler---hidden]').value;

            formData['fullName'] = fullName;
            formData['country'] = country;
            formData['states'] = states;
            formData['hobbies'] = Array.from(hobbies).map(item => item.value);
            formData['gender'] = gender;
            formData['marketing'] = Array.from(marketing).map(item => item.value);
            formData['subject'] = subject;
            formData['Hidden'] = hidden;
            console.log(formData);
        }

    </script>
