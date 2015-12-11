<!-- Footer Section -->
<!-- JS Bundle -->
<script src="{{ elixir('js/bundle.js') }}"></script>
<!-- React App Loader -->
<script>
  (function() {
    var __main__ = document.getElementById('__main__');

    if (window.App === undefined) {
      throw new Error('application not found');
    }

    var __APP__ = App.appPayload;

    App.render(
      __APP__,
      __main__
    );    
  })();
</script>
