{
  description = "Flake for tylerelton.com";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  };

  outputs = { self, nixpkgs }:
  let
    systems = [
      "x86_64-linux"
      "aarch64-linux"
      "x86_64-darwin"
      "aarch64-darwin"
    ];

    forAllSystems = f:
      nixpkgs.lib.genAttrs systems (system:
        f (import nixpkgs { inherit system; }));
  in
  {
    devShells = forAllSystems (pkgs:
    {
      default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nil
          nixd
          
          nodejs_24
          pnpm
        ];

        shellHook = ''
          echo "Node version: $(node --version)"
          echo "pnpm version: $(pnpm --version)"
        '';

        # Set pnpm store directory to avoid issues
        PNPM_HOME = "./.pnpm-store";
      };
    });
  };
}
