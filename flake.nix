{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { self, nixpkgs }:
    let
      system = "x86_64-linux"; # adjust if using arm (aarch64-linux)
      pkgs = nixpkgs.legacyPackages.${system};

      # 1. Define the missing libraries needed by the pre-compiled DevTools binary
      linuxLibs = with pkgs; [
        glib
        nss
        nspr
        atk
        cups
        dbus
        libdrm
        pango
        cairo
        alsa-lib
        mesa
        expat
        xorg.libX11
        xorg.libXcomposite
        xorg.libXdamage
        xorg.libXext
        xorg.libXfixes
        xorg.libXrandr
        xorg.libxcb
      ];
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        # Keep your existing Node setup intact
        buildInputs = [
          pkgs.nodejs_22
          pkgs.nodePackages.npm
        ];

        # 2. Tell NixOS where to find those libraries when you enter the shell
        shellHook = ''
          export LD_LIBRARY_PATH="${pkgs.lib.makeLibraryPath linuxLibs}:$LD_LIBRARY_PATH"
          echo "Expo React Native environment loaded with Linux FHS fixes"
        '';
      };
    };
}
