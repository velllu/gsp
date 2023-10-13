{ pkgs, lib, ... }:

{
  languages.javascript = {
    enable = true;
    npm.install.enable = true;
  };

  packages = [
    pkgs.nodePackages_latest.typescript-language-server
  ];
}