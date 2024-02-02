jQuery(() => {
    $('#extensions_settings').append(`
    <div class="inline-drawer">
        <div class="inline-drawer-toggle inline-drawer-header">
            <b>Silence Player</b>
            <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
        </div>
        <div class="inline-drawer-content">
            <audio autoplay loop controls src="/scripts/extensions/third-party/Extension-Silence/silence.m4a" >
        </div>
    </div>`);
});
