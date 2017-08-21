package com.localeutils;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Locale;
import java.util.Map;
import java.util.HashMap;

import android.text.format.DateFormat;

import javax.annotation.Nullable;

public class LocaleUtilsModule extends ReactContextBaseJavaModule {

	ReactApplicationContext reactContext;

  public LocaleUtilsModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

	@Override
	public String getName() {
		return "LocaleUtils";
	}

	private boolean is24HourFormat() {
		return DateFormat.is24HourFormat(getReactApplicationContext());
	}

	private boolean usesMetricSystem() {
		String countryCode = this.deviceCountry().toUpperCase();
    switch (countryCode) {
        case "US":
        case "LR":
        case "MM":
            return false;
        default:
            return true;
    }
	}

	private String deviceCountry() {
		return Locale.getDefault().getCountry();
	}

	@Override
  public @Nullable Map<String, Object> getConstants() {
		HashMap<String, Object> constants = new HashMap<String, Object>();

		constants.put("is24HourFormat", this.is24HourFormat());
		constants.put("usesMetricSystem", this.usesMetricSystem());
		constants.put("deviceCountry", this.deviceCountry());

    return constants;
	}
}
