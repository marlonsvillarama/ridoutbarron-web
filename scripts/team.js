document.addEventListener('DOMContentLoaded', () => {
    console.log('team js');
    let profiles = document.querySelectorAll('.profile');
    let profileDialog = document.querySelector('.profile-dlg');
    // profileDialog.showModal();

    profiles.forEach(profile => {
        let profileBtn = profile.querySelector('.profile-btn');
        if (!profileBtn) {
            console.log('Unable to find profile-btn')
            return;
        }

        profileBtn.addEventListener('mouseup', (e) => {
            profileDialog.showModal();
            console.log('clicked', e.target.dataset.id);
            return;

            profiles.forEach(p => {
                // console.log('p', p);
                // let closeBtn = p.querySelector('.profile-btn-close');
                // console.log('closeBtn', closeBtn);
                // if (!closeBtn.classList.contains('hidden')) { closeBtn.classList.add('hidden') }

                if (p.id === e.target.dataset.id) { return }

                console.log('hiding profile', p.id);
                let details = p.querySelector('.details');
                details.classList.remove('read');

                let detailText = details.querySelectorAll('p');
                detailText.forEach(d => {
                    d.classList.remove('visible')
                    // if (d.classList.contains('visible')) { d.classList.remove('visible') }
                });
            });

            // let closeBtn = profile.querySelector('.profile-btn-close');
            // closeBtn.classList.remove('hidden');

            // profileBtn.classList.add('show-block');
            
            let details = profile.querySelector('.details');
            details.classList.toggle('read');

            let detailText = details.querySelectorAll('p');
            detailText.forEach(p => {
                if (p.classList.contains('visible')) { p.classList.remove('visible') }
                else { p.classList.add('visible') }
            });

            // profile.scrollIntoView({ block: 'start' });
        });
    });

    // let profileCloseBtn = document.querySelector('.profile-close-btn');
    // profileCloseBtn.addEventListener('mouseup', (e) => {
    //     alert('closing dialog')
    //     profileDialog.close();
    // });
});
