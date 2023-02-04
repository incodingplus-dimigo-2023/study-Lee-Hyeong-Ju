<script>
    let [x, y] = [0, 0];
    let keys = {
        ArrowUp: [0, [0, 1]],
        ArrowDown: [0, [0, -1]],
        ArrowRight: [0, [1, 0]],
        ArrowLeft: [0, [-1, 0]]
    }

    document.addEventListener('keydown', (e) => {
    })
</script>

<div class="player"></div>
<style>
    div.player {
        transform: translate();
    }
</style>