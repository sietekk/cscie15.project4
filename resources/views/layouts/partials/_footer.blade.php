<!-- Footer Section -->
<!-- Global Vars -->
<script>
  var __MOUNT_PREFIX__ = "{{ $MOUNT_PREFIX }}";
</script>
<!-- JS Bundle -->
<script src="{{ elixir('js/bundle.js') }}"></script>
<!-- React App Loader -->
<script>
  (function() {
    if (window.APP === undefined) {
      throw new Error('application not found');
    }

    var __main__ = document.getElementById('__main__');
    var __preloader__ = document.getElementById('__preloader__');
    var __app__ = APP.{{ $render_app }};

    APP.render(
      __app__,
      __main__,
      function() {
        document.body.removeChild(__preloader__);
      }
    );    
  })();
</script>
