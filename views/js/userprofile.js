$(window).on("load", function() {

    let profileCard = $("#profileCard");
    let profileForm = $("#profileForm");

    function toggleProfileView() {
        profileForm.toggle();
        profileCard.toggle();
    }

    $("#editProfile").click( toggleProfileView);
    $("#cancelProfileEdit").click(toggleProfileView);
    $("#saveProfileEdit").click(toggleProfileView);
});
