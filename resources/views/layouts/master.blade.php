<!DOCTYPE html>
<html lang="en">
  @include('layouts.partials._head')
  <body>
    <div class="container-fluid container background">
      @include('layouts.partials._navbar')
      <!-- Page Content -->
      <div id="main-container">
        @yield('main-content')
      </div>
    </div>
  </body>
  @include('layouts.partials._footer')
</html>
