<!DOCTYPE html>
<html lang="en">
  @include('layouts.partials._head')
  <body class="background">
    @include('layouts.partials._preloader')
    <div class="container-fluid container">
      @include('layouts.partials._navbar')
    </div>
    <!-- Page Content -->
    <div id="main-container">
      @yield('main-content')
    </div>
  </body>
  @include('layouts.partials._footer')
</html>
