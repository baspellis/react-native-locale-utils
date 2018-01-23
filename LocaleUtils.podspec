require 'json'
version = JSON.parse(File.read('package.json'))["version"]

Pod::Spec.new do |s|

  s.name            = "LocaleUtils"
  s.version         = version
  s.homepage        = "https://github.com/baspellis/react-native-locale-utils"
  s.summary         = "Locale utilities for React Native"
  s.license         = "MIT"
  s.author          = { "Bas Pellis" => "bas@webcomrades.com" }
  s.platform        = :ios, "7.0"
  s.source          = { :git => "https://github.com/baspellis/react-native-locale-utils.git", :tag => "#{s.version}" }
  s.source_files    = 'ios/LocaleUtils.{h,m}'

  s.dependency 'React'

end
