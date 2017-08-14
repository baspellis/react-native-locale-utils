#import "LocaleUtils.h"

static NSDateFormatter *dateFormatter = nil;

@implementation LocaleUtils

RCT_EXPORT_MODULE()

- (NSDateFormatter *)dateFormatter {
    if (!dateFormatter) {
        dateFormatter = [[NSDateFormatter alloc] init];
        [dateFormatter setLocale:[NSLocale currentLocale]];
        [dateFormatter setDateStyle:NSDateFormatterNoStyle];
        [dateFormatter setTimeStyle:NSDateFormatterShortStyle];
    }
    return dateFormatter;
}

- (BOOL)is24HourFormat {
    NSDateFormatter *formatter = [self dateFormatter];
    NSString *dateString = [formatter stringFromDate:[NSDate date]];

    NSRange amRange = [dateString rangeOfString:[formatter AMSymbol]];
    NSRange pmRange = [dateString rangeOfString:[formatter PMSymbol]];

    return (amRange.location == NSNotFound && pmRange.location == NSNotFound);
}

- (NSDictionary *)constantsToExport {
    return @{@"is24HourFormat": @(self.is24HourFormat)};
}

@end
